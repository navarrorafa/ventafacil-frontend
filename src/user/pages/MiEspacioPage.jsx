import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


export const MiEspacioPage = () => {

  const { user } = useContext(UserContext);
  const {uidFireBase} = user
  return (
  <>
  <div>

  <Link to={`/user/myhome/update/${uidFireBase}`}>Editar Perfil</Link>
    
  
    <Outlet />
  </div>
  
  </>
  )
}
