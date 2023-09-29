import { Outlet } from 'react-router-dom';
import { RegisterFireForm } from '../components/RegisterFireForm';

export const RegisterFireBasePage = () => {
  return (
    <div>
      <Outlet />
      <RegisterFireForm />
    </div>
  )
}
