import { useState } from "react";



export const SelectProvincia = ({ valueData, handleChange }) => {

    const [selectSize, setSelectSize] = useState(1);

    const toggleSize = () => {
        setSelectSize(selectSize === 1 ? 5 : 1);
    }

    return (

        <>
            <label htmlFor="provincia"></label>

            <select
                className='form-control mb-2'
                id="provincia"
                name="provincia"
                size={selectSize}
                onFocus={toggleSize}
                onBlur={toggleSize}
                defaultValue={valueData || ''}
                onChange={handleChange}

            >
                <option selected disabled>Elige una provincia</option>
                <option value="alava">Alava</option>
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
            </select >
        </>

    )
}