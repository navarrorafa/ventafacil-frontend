import { Outlet } from 'react-router-dom';

import { EditarForm } from '../components/EditarForm';
export const EditarAnuncioPage = () => {
  return (
    
        <>
      <EditarForm/>
        <Outlet />
        </>
      )
  
}
