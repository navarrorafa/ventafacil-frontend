
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { BorrarAnuncioAdminPage, PerfilAnuncioPage, PerfilUserPage, TablaAnunciosPage, TablaUserPage } from '../pages';


export const AdminRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/anuncios" element={<TablaAnunciosPage />}>
                    <Route path="/anuncios/producto/:id" element={<PerfilAnuncioPage />} />
                    <Route path="/anuncios/borrarproducto/:id" element={<BorrarAnuncioAdminPage />} />
                </Route>
                <Route path="/user" element={<TablaUserPage />}>
                    <Route path="/user/:id" element={<PerfilUserPage />} />
                </Route>
            </Routes>


        </>
    )
}
