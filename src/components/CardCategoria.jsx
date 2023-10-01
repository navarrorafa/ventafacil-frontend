import { Link, NavLink } from 'react-router-dom';

export const CardCategoria = ({nombre, descripcion}) => {




  return (
    <>
      <div>
        <div>
          
         <Link to={`nombre de la ruta/${nombre}`}>{nombre}</Link>  

        </div>
      </div>
    </>
  );
}
