import { Link } from 'react-router-dom';

export const CardCategoria = ({ nombre, descripcion }) => {




  return (
    <>
      <Link className="card bg-dark" to={`/anunciosporcat/${nombre}`}>
        <div className="card-body">
          <h2 className="card-title text-light">{nombre}</h2>

          {/* <img src={Logo} alt={`categoría ${nombre}`} /> */}

        </div>
      </Link>
    </>
  );
}
