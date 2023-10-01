import { Outlet } from 'react-router-dom';
import TablaAnuncios from '../components/TablaAnuncios';

export const TablaUserPage = () => {
  return (
    <div>
      <TablaAnuncios />
      <Outlet />
    </div>

  )
}
