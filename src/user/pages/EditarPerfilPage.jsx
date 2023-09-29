import { Outlet } from 'react-router-dom';
import { CrearFormUser } from '../components/CrearFormUser';


export const EditarPerfilPage = () => {
  return (
    <div>
      <CrearFormUser mode="update"/>
      <Outlet/>
      </div>

  )
}
