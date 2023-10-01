import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { EditarPerfilPage, HistorialComprasPage, HistorialVentasPage,MiEspacioPage, PublicarAnuncioPage } from "../pages"
import { EditarAnuncioPage } from '../pages/EditarAnuncioPage';
import { EliminarAnuncioPage } from '../pages/EliminarAnuncioPage';




export const UserRouter = () => {
    return (

   

  
   <>
  <Routes>

  <Route path="articulos" element={<TodosAnunciosPage />} />
  <Route path="misanuncios" element={<TodosMisAnunciosPage />} />

    <Route path="publicar" element={<PublicarAnuncioPage />} />

    <Route path="editar/:id_anuncio" element={<EditarAnuncioPage />} />
    <Route path="eliminar/:id_anuncio" element={<EliminarAnuncioPage />} />
    <Route path="myhome" element={<MiEspacioPage />}>
      <Route path="update/:id" element={<EditarPerfilPage />} />

      <Route path="sales" element={<HistorialVentasPage />}>
        
      </Route>
      
      <Route path="buy" element={<HistorialComprasPage />}>
       
      </Route>
    </Route>
    </Routes>
    </>

 




     


    )
}
