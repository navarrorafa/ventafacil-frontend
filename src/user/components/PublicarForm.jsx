import { useForm } from "../../hooks/useForm";




export const PublicarForm = ({mode}) => {
 
const { data, submited, handleSubmit, handleChange}=useForm()
  
  return (
    <form encType="multipart/form" onSubmit={handleSubmit} method="post"> 
      <input type="text" value={data.Producto} placeholder="Producto" name='producto' onClick={handleChange}/>
     <textarea name="descripcion" value={data.Descripcion} id="descripcion" cols="30" rows="10"></textarea>
      <input type="text" value={data.Precio} placeholder="Precio"  name='precio' onClick={handleChange}/>
      <select name='categoria' value={data.Categoria} onClick={handleChange} >
        <option value="electronica">electronica</option>
        <option value=" ropaAccesorios">Ropa y accesorios</option>
        <option value=" hogarJardin"> Hoga y jardín</option>
        <option value=" deportesAireLibre"> Deportes y aire libre</option>
        <option value=" saludBelleza"> Salud y belleza</option>
        <option value=" juguetesJuegos"> Juguetes y juegos</option>
        <option value=" alimentosBebidas"> Alimentación</option>
        <option value=" librosMusica"> Libros y música</option>
      </select>
      <select name="zonageografica" value={data.Categoria} onClick={handleChange}>
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
                    <option value="ciudad-real">Ciudad Real</option>
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
      <input type="file" placeholder="Fotografía"  name='imagenAnuncio'/>
      <input hidden type="text"  name="idVendedor"/>
      <input hidden type="text"  name="nombreVendedor" />
      <input hidden type="text" name="rutaFoto" />
      <input type="submit" />
    </form>
  );
}