import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { CardAnuncioPage } from "../../pages"
import { EditarPerfilPage, HistorialComprasPage, HistorialVentasPage, MiEspacioPage, PublicarAnuncioPage } from "../pages"


export const UserRouter = () => {
    return (

   

  
   <>
  <Routes>
    <Route path="publicar" element={<PublicarAnuncioPage />} />

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
