
import { dataFetch } from '../../helpers/dataFetch';
import { useForm } from "../../hooks/useForm";
import { useDatosAds } from '../hooks/useDatosAds';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const EditarForm = () => {
  const { id } = useParams()
  const { adData } = useDatosAds(id)

  
  const initialValues = {
    producto: adData.producto
  };
  console.log(initialValues.producto)
  const url = `http://localhost:3000/api/v1/ventafacil/ads/actualizar/${id}`
  const { handleChange, handleFileChange, data, file } = useForm(initialValues)




  const onSubmit = (ev) => {

    ev.preventDefault()
    const newAd = data
    updateAd(newAd)


  }

  const updateAd = async (newAd) => {
    const completeAd = {
      ...newAd,
      imagen_anuncio: file.name
    }
    console.log("ANUNCIO EDITADO", completeAd)
    const dataAnuncio = await dataFetch(url, "PUT", completeAd)
    console.log(dataAnuncio)
  }




  return (

    <>
      <pre>{JSON.stringify(data)}</pre>
      <h1 className="text-center text-dark">Editar mi Anuncio</h1>


      <form className="form-control bg-dark" encType='multipart/form-data' onSubmit={onSubmit} method="PUT">
        <input className='form-control mb-2' type="text" onChange={handleChange} placeholder="Producto" name='producto' defaultValue={adData.producto} />
        <textarea className='form-control mb-2' name="descripcion" onChange={handleChange} defaultValue={adData.descripcion} id="descripcion" cols="20" rows="10"></textarea>
        <input className='form-control mb-2' type="text" onChange={handleChange} defaultValue={adData.precio} placeholder="Precio" name='precio' />
        <select className='form-control mb-2' name='categoria' defaultValue={adData.categoria} onChange={handleChange} >
          <option value="" disabled>Elige una categoría</option>
          <option value="electronica">electronica</option>
          <option value=" ropaAccesorios">Ropa y accesorios</option>
          <option value=" hogarJardin"> Hoga y jardín</option>
          <option value=" deportesAireLibre"> Deportes y aire libre</option>
          <option value=" saludBelleza"> Salud y belleza</option>
          <option value=" juguetesJuegos"> Juguetes y juegos</option>
          <option value=" alimentosBebidas"> Alimentación</option>
          <option value=" librosMusica"> Libros y música</option>
        </select>
        <select className='form-control mb-2' name="zona_geografica" defaultValue={adData.zona_geografica} onChange={handleChange}>
          <option value="" disabled>Elige una provincia</option>
          <option value="alava">Alava</option>
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
        <input className='text-start text-light bg-dark' type='file' placeholder="Fotografía" name='imagen_anuncio' onChange={handleFileChange} />

        <input type="text" name="ID_vendedor" onChange={handleChange} defaultValue={adData.id_vendedor} />

        <input type="text" name="producto_stripe" onChange={handleChange} defaultValue={adData.producto_stripe} />

        <input className='btn btn-success m-2' type="submit" value='Editar' />
      </form>
    </>
  );
}
