
import { Outlet } from 'react-router-dom';
import { PublicarForm } from '../components/PublicarForm';

export const PublicarAnuncioPage = () => {
  
  return (
    <>
  <PublicarForm/>
    <Outlet />
    </>
  )
}
