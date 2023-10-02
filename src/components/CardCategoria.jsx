import { Link, NavLink, Outlet } from 'react-router-dom';

export const CardCategoria = ({ nombre, descripcion }) => {




  return (
    <>
      <div>
        <div>

          <Link className='btn btn-lg btn-dark' to={`/anunciosporcat/${nombre}`}>{nombre}</Link>

        </div>
      </div>
    </>
  );
}
