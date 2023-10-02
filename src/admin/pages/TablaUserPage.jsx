import { Outlet } from 'react-router-dom';
import TablaAnuncios from '../components/TablaAnuncios';
import { TablaUser } from '../components/TablaUser';

export const TablaUserPage = () => {
  return (
    <div>
      <TablaUser />
      <Outlet />
    </div>

  )
}
