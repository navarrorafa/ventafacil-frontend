
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { BorrarAnuncioAdminPage, PerfilAnuncioPage, PerfilUserPage, TablaAnunciosPage, TablaUserPage } from '../pages';


export const AdminRouter = () => {
    return (
        <>
            <Routes>
                <Route path="anuncios" element={<TablaAnunciosPage />}>
                    <Route path="producto/:id" element={<PerfilAnuncioPage />} />
                    <Route path="/borrarproducto/:id" element={<BorrarAnuncioAdminPage />} />
                </Route>
                <Route path="user" element={<TablaUserPage />}>
                    <Route path="/:id" element={<PerfilUserPage />} />
                </Route>
            </Routes>


        </>
    )
}
