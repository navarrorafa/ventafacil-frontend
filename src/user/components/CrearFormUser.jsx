import { useState } from 'react';
import { SelectProvincia } from '../../components/SelectProvincia';
import { dataFetch } from '../../helpers/dataFetch';
import { useForm } from '../../hooks/useForm';

export const CrearFormUser = ({mode}) => {
    
    const [selectSize, setSelectSize] = useState(1);

    const toggleSize = () => {
        setSelectSize(selectSize === 1 ? 5 : 1);
    };

    const url = "http://localhost:3000/api/v1/users/create"
   const {handleChange,handleSubmit,data,submited} =useForm()
    const onSubmit = (ev) => {
        ev.preventDefault()
        const newUser = data;
        createUser(newUser)
    }

    const createUser = async (newUser) => {
       const cosa =await dataFetch(url,"POST", newUser)
       console.log(cosa)
    }

    return (
        <>
        <pre>{JSON.stringify(data)}</pre>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Uid_firebase" id="uid_firebase" name="uid_firebase" hidden />
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" placeholder="Nombre" onChange={handleChange} value={data.nombre} id="nombre" name="nombre" />
                <label htmlFor="apellidos">Apellidos:</label>
                <input type="text" placeholder="Apellidos" onChange={handleChange}id="apellidos" name="apellidos" />
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="Username" id="username" name="username"onChange={handleChange} disabled={mode === 'update'} />
                <label htmlFor="email">Email:</label>
                <input type="text" placeholder="Email" id="email" name="email"onChange={handleChange}  />
                <label htmlFor="contacto">Contacto:</label>
                <input type="tel" placeholder="Contacto" id="contacto" name="contacto" onChange={handleChange} />
                <label htmlFor="provincia">Provincia:</label>
                
    <select id="provincia" name="provincia" size={selectSize} onChange={handleChange}  onFocus={toggleSize} onBlur={toggleSize}>
    <option value="">-------</option>
    <option value="alava">Alava</option>
    <option value="albacete">Albacete</option>
    <option value="albacete">Albacete</option>
    <option value="alicante">Alicante</option>
    <option value="almeria">Almeria</option>
    <option value="asturias">Asturias</option>
    <option value="avila">Avila</option>
    <option value="badajoz">Badajoz</option>
    <option value="barcelona">Barcelona</option>
    <option value="burgos">Burgos</option>
    <option value="caceres">Caceres</option>
    <option value="cadiz">Cadiz</option>
    <option value="cantabria">Cantabria</option>
    <option value="castellon">Castellon</option>
    <option value="ciudad real">Ciudad Real</option>
    <option value="cordoba">Cordoba</option>
    <option value="cuenca">Cuenca</option>
    <option value="gerona">Gerona</option>
    <option value="granada">Granada</option>
    <option value="guadalajara">Guadalajara</option>
    <option value="guipuzcoa">Guipuzcoa</option>
    <option value="huelva">Huelva</option>
    <option value="huesca">Huesca</option>
    <option value="islas-balears">Islas Balears</option>
    <option value="jaen">Jaen</option>
    <option value="la-coruña">La Coruña</option>
    <option value="la-rioja">La Rioja</option>
    <option value="las-palmas">Las Palmas</option>
    <option value="leon">Leon</option>
    <option value="lerida">Lerida</option>
    <option value="lugo">Lugo</option>
    <option value="madrid">Madrid</option>
    <option value="malaga">Malaga</option>
    <option value="murcia">Murcia</option>
    <option value="navarra">Navarra</option>
    <option value="orense">Orense</option>
    <option value="palencia">Palencia</option>
    <option value="pontevedra">Pontevedra</option>
    <option value="salamanca">Salamanca</option>
    <option value="santa-cruz-de-tenerife">Santa Cruz De Tenerife</option>
    <option value="segovia">Segovia</option>
    <option value="sevilla">Sevilla</option>
    <option value="soria">Soria</option>
    <option value="tarragona">Tarragona</option>
    <option value="teruel">Teruel</option>
    <option value="toledo">Toledo</option>
    <option value="valencia">Valencia</option>
    <option value="valladolid">Valladolid</option>
    <option value="vizcaya">Vizcaya</option>
    <option value="zamora">Zamora</option>
    <option value="zaragoza">Zaragoza</option>
</select>
                <label htmlFor="ciudad">Ciudad:</label>
                <input type="text" placeholder="Ciudad" id="ciudad" name="ciudad" onChange={handleChange}/>
                <input type="text" placeholder="Fecha" id="fecha" name="fecha" hidden onChange={handleChange} />
                <input type="submit" />
            </form>
        </>
    )
}


