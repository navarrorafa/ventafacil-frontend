import { Outlet } from 'react-router-dom';
import React from 'react';
import TablaAnuncios from '../components/TablaAnuncios';


const TablaAnunciosPage = () => {
  return (
    <div>
      <TablaAnuncios />
      <Outlet/>
    </div>
  );
};

export default TablaAnunciosPage;

