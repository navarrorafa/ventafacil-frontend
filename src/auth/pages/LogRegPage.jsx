import { Outlet } from 'react-router-dom';
import { LogRegForm } from '../components/LogRegForm';

export const LogRegPage =  () => {
    return (
      <div>
        <LogRegForm />
        <Outlet />
      </div>
    )
  }
  