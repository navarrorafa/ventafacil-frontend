import { Outlet } from 'react-router-dom';
import { LogRegForm } from '../components/LogRegForm';

export const LoginPage = () => {
  return (
    <div>
      <Outlet />
      <LogRegForm />
    </div>
  )
}
