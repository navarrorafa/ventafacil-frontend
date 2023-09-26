
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { PerfilAnuncioPage, PerfilUserPage, TablaAnunciosPage, TablaUserPage } from '../pages';


export const AdminRouter = () => {
    return (
        <>
            <Routes>
                <Route path="anuncios" element={<TablaAnunciosPage />}>
                    <Route path=":id" element={<PerfilAnuncioPage />} />
                </Route>
                <Route path="user" element={<TablaUserPage />}>
                    <Route path=":id" element={<PerfilUserPage />} />
                </Route>
            </Routes>


        </>
    )
}
