import { Link, NavLink, Outlet } from 'react-router-dom';

export const CardCategoria = ({nombre, descripcion}) => {




  return (
    <>
      <div>
        <div>
          
         <Link to={`/anunciosporcat/${nombre}`}> <button type="button">{descripcion}</button></Link>  

        </div>
      </div>
    </>
  );
}
