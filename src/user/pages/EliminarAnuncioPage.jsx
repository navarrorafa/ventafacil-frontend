import { Outlet } from 'react-router-dom';
import { BorrarForm } from '../components/BorrarForm';
export const EliminarAnuncioPage = () => {

    
  return (
    <div>
    <BorrarForm/>
    <Outlet />
    </div>
    
  )
}
