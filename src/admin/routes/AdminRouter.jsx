
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { PerfilAnuncioPage, TablaUserPage } from '../pages';
import TablaAnunciosPage from '../pages/TablaAnunciosPage';
import PerfilUserPage from '../pages/PerfilUserPage';



export const AdminRouter = () => {
    return (
        <>
            <Routes>
                <Route path="anuncios" element={<TablaAnunciosPage />}/>
                   
                <Route path="user" element={<TablaUserPage/>}/> 
                <Route path="user/:id" element={<PerfilUserPage/>} />
               
            </Routes>


        </>
    )
}
