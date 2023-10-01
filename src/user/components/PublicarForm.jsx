import { useContext, useEffect, useState } from 'react';
import { useForm } from "../../hooks/useForm";
import { dataFetch } from '../../helpers/dataFetch';
import { UserProvider } from '../../context/UserProvider';
import { UserContext } from '../../context/UserContext';
export const PublicarForm = ({ mode }) => {
    const {user}=useContext(UserContext)
const {uidFireBase} = user

    const url = "http://localhost:3000/api/v1/ventafacil/ads/anunciar"
    const { handleChange, handleSubmit, handleFileChange, data, submited, file } = useForm()
    const onSubmit = (ev) => {
    ev.preventDefault()
     const newAd = data
    createad(newAd)
     }
    const createad = async (newAd) => {
      const completeAd={...newAd,
        imagen_anuncio: file.name}
        console.log("ANUNCIO COMPLETO", completeAd)
      const dataAnuncio = await dataFetch(url, "POST", completeAd)
      console.log(dataAnuncio)
    }
    return (
      <>
        <pre>{JSON.stringify(data)}</pre>
        <form encType='multipart/form-data' onSubmit={onSubmit} method="POST">
          <input type="text" onChange={handleChange} value={data.Producto} placeholder="Producto" name='producto' />
          <textarea name="descripcion" onChange={handleChange} value={data.Descripcion} id="descripcion" cols="30" rows="10"></textarea>
          <input type="text" onChange={handleChange} value={data.Precio} placeholder="Precio" name='precio' />
          <select name='categoria' value={data.Categoria} onChange={handleChange} >
            <option value="electronica">electronica</option>
            <option value=" ropaAccesorios">Ropa y accesorios</option>
            <option value=" hogarJardin"> Hoga y jardín</option>
            <option value=" deportesAireLibre"> Deportes y aire libre</option>
            <option value=" saludBelleza"> Salud y belleza</option>
            <option value=" juguetesJuegos"> Juguetes y juegos</option>
            <option value=" alimentosBebidas"> Alimentación</option>
            <option value=" librosMusica"> Libros y música</option>
          </select>
          <select name="zona_geografica" value={data.Zona_Geografica} onChange={handleChange}>
            <option value="">-------</option>
            <option value="alava">Alava</option>
            <option value="albacete">Albacete</option>
            <option value="albacete">Albacete</option>
            <option value="alicante">Alicante</option>
            <option value="almeria">Almería</option>
            <option value="asturias">Asturias</option>
            <option value="avila">Ávila</option>
            <option value="badajoz">Badajoz</option>
            <option value="barcelona">Barcelona</option>
            <option value="burgos">Burgos</option>
            <option value="caceres">Cáceres</option>
            <option value="cadiz">Cádiz</option>
            <option value="cantabria">Cantabria</option>
            <option value="castellon">Castellón</option>
            <option value="ciudad-real">Ciudad Real</option>
            <option value="cordoba">Córdoba</option>
            <option value="cuenca">Cuenca</option>
            <option value="gerona">Gerona</option>
            <option value="granada">Granada</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="guipuzcoa">Guipuzcoa</option>
            <option value="huelva">Huelva</option>
            <option value="huesca">Huesca</option>
            <option value="islas-balears">Islas Balears</option>
            <option value="jaen">Jaén</option>
            <option value="la-coruña">La Coruña</option>
            <option value="la-rioja">La Rioja</option>
            <option value="las-palmas">Las Palmas</option>
            <option value="leon">León</option>
            <option value="lerida">Lérida</option>
            <option value="lugo">Lugo</option>
            <option value="madrid">Madrid</option>
            <option value="malaga">Málaga</option>
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
          <input type='file' placeholder="Fotografía" name='imagen_anuncio' onChange={handleFileChange} />
          <input  type="checkbox" required name="ID_vendedor" onChange={handleChange} defaultValue={uidFireBase} />
          <input hidden type="text" name="nombreVendedor" />
          <input type="submit" />
        </form>
      </>
    );
  }