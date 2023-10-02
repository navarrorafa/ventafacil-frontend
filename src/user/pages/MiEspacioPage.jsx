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

  <Link className='btn btn-dark m-3' to={`/user/myhome/update/${uidFireBase}`}><strong>Editar Perfil</strong></Link>
    
  
    <Outlet />
  </div>
  
  </>
  )
}
