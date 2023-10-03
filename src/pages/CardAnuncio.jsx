
import { Link } from 'react-router-dom';


export const CardAnuncio = ({ ruta_foto, categoria, producto, precio, id_anuncio }) => {



  return (
    <>
      
      <article className="bg-dark text-light card mb-2">
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top img-fluid mb-2" src={import.meta.env.VITE_APP_RUTA_GLOBAL+"/"+ruta_foto} alt={producto} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title text-light">{producto} - {precio}€</h2>
              <p className="card-subtitle">{categoria}</p>
              <Link className='btn btn-primary' to={`/producto/${id_anuncio}`}>Detalles</Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
