import { Link, NavLink, Outlet } from 'react-router-dom';

export const CardCategoria = ({nombre, descripcion}) => {




  return (
    <>
      <div>
        <div>
          
         <Link to={`/anunciosporcat/${nombre}`}>{nombre}</Link>  

        </div>
      </div>
    </>
  );
}
