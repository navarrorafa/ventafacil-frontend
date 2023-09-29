import { Routes, Route } from 'react-router-dom';
import { CardAnuncioPage } from "../../pages"
import { BorrarAnuncioPage, EditarAnuncioPage, EditarPerfilPage, HistorialComprasPage, HistorialVentasPage, MiEspacioPage, PublicarAnuncioPage } from "../pages"


export const UserRouter = () => {
  return (

    <>
      <Routes>
        <Route path="/publicar" element={<PublicarAnuncioPage />} /> {/*NAVEGA PUBLICAR ANUNCIO*/}

        <Route path="/myhome" element={<MiEspacioPage />}> {/*NAVEGA HACIA MY SPACE*/}
          <Route path="/myhome/update/:id" element={<EditarPerfilPage />} /> {/*EDITAR PERFIL*/}
          <Route path="/myhome/sales" element={<HistorialVentasPage />}> {/*ANUNCIOS EN VENTA Y VENDIDOS*/}
            <Route path="/myhome/sales/producto/:id" element={<CardAnuncioPage />} /> {/*VER*/}
            <Route path="/myhome/sales/editarproducto/:id" element={<EditarAnuncioPage />} /> {/*EDITAR*/}
            <Route path="/myhome/sales/borrarproducto/:id" element={<BorrarAnuncioPage />} /> {/*BORRAR*/}
          </Route>
          <Route path="/buy" element={<HistorialComprasPage />}> {/*ANUNCIOS COMPRADOS*/}
            <Route path="/buy/producto/:id" element={<CardAnuncioPage />} /> {/*DETALLE ANUNCIO COMPRADO*/}
          </Route>
        </Route>
      </Routes>
    </>

  );
};
