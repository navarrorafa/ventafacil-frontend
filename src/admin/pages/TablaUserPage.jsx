import { Outlet } from 'react-router-dom';
import TablaAnuncios from '../components/TablaAnuncios';
import { TablaUser } from '../components/TablaUser';

export const TablaUserPage = () => {
  return (
    <div>
      <h1 className='text-start'><strong>Usuarios</strong></h1>
      <TablaUser />
      <Outlet />
    </div>

  )
}
