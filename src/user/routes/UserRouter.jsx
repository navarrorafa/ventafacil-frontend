import { Routes, Route } from 'react-router-dom';
import { EditarPerfilPage, HistorialComprasPage, HistorialVentasPage, MiEspacioPage, PublicarAnuncioPage, RegisterPage, TodosMisAnunciosPage, EditarAnuncioPage, EliminarAnuncioPage, TodosAnunciosPage } from "../pages"
import { PintarUnaCategoria } from '../pages/PintarUnaCategoria';

export const UserRouter = () => {
  return (

    <>
      <Routes>
     
        <Route path="articulos" element={<TodosAnunciosPage />} />
        <Route path="misanuncios" element={<TodosMisAnunciosPage />} />
        <Route path="publicar" element={<PublicarAnuncioPage />} />
        <Route path="editar/:id" element={<EditarAnuncioPage />} />
        <Route path="eliminar/:id" element={<EliminarAnuncioPage />} />

        
        <Route path="myhome" element={<MiEspacioPage />}>
          <Route path="update/:id" element={<EditarPerfilPage />} />

          <Route path="sales" element={<HistorialVentasPage />}>

          </Route>

          <Route path="buy" element={<HistorialComprasPage />}>

          </Route>
        </Route>
      </Routes>
    </>

  );
};
