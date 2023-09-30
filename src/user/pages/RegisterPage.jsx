import { Outlet } from 'react-router-dom';
import { CrearFormUser } from '../components/CrearFormUser';


export const RegisterPage = () => {
  return (
    <section>
      <CrearFormUser mode="crear"/>
      <Outlet />
    </section>

  );
};