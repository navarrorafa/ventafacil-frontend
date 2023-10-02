import { Outlet } from 'react-router-dom';
import React from 'react';
import TablaAnuncios from '../components/TablaAnuncios';


const TablaAnunciosPage = () => {
  return (
    <div>
      <h1>Anuncios</h1>
      <TablaAnuncios />
      <Outlet/>
    </div>
  );
};

export default TablaAnunciosPage;

