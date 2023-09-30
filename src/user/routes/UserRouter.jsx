import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { CardAnuncioPage } from "../../pages"
import { EditarPerfilPage, HistorialComprasPage, HistorialVentasPage, MiEspacioPage, PublicarAnuncioPage } from "../pages"
import { EditarAnuncioPage } from '../pages/EditarAnuncioPage';


export const UserRouter = () => {
    return (

   

  
   <>
  <Routes>
    <Route path="publicar" element={<PublicarAnuncioPage />} />

    <Route path="editar/:id_anuncio" element={<EditarAnuncioPage />} />
    <Route path="myhome" element={<MiEspacioPage />}>
      <Route path="update/:id" element={<EditarPerfilPage />} />

      <Route path="sales" element={<HistorialVentasPage />}>
        <Route path="producto/:id" element={<CardAnuncioPage />} />
      </Route>
      
      <Route path="buy" element={<HistorialComprasPage />}>
        <Route path="producto/:id" element={<CardAnuncioPage />} />
      </Route>
    </Route>
    </Routes>
    </>

 




     


    )
}
