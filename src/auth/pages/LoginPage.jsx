import { Outlet } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';

export const LoginPage = () => {
  return (
    <div>
      <Outlet />
      <LoginForm />
    </div>
  )
}
