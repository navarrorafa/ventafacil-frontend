import { Outlet } from 'react-router-dom';
import TablaAnuncios from '../components/TablaAnuncios';

export const TablaUserPage = () => {
  return (
    <div>
      <h1 className='text-start'><strong>Usuarios</strong></h1>
      <TablaAnuncios />
      <Outlet />
    </div>

  )
}
