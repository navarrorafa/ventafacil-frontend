import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { HomePage, CategoriaPage, GalleryPage } from '../pages';
import { AuthRouter } from '../auth/routes/AuthRouter';
import { UserRouter } from '../user/routes/UserRouter';
import { AdminRouter } from '../admin/routes/AdminRouter';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import CardAnuncioPage from '../pages/CardAnuncioPage';
import { PintarUnaCategoria } from '../user/pages/PintarUnaCategoria';
import { RegisterPage } from '../user/pages';


export const AppRouter = () => {

   const { user } = useContext(UserContext);
   const { rolFireBase } = user

   return (

      <Routes>

         <Route path="/" element={<HomePage />}/>
         <Route path="producto/:id" element={<CardAnuncioPage />} />
         <Route path="/galeria/:id" element={<GalleryPage />} />
         <Route path="/producto/:id" element={<CardAnuncioPage />} />
         <Route path="/categoria" element={<CategoriaPage />}/>
         
       
         <Route path="/register" element={<RegisterPage />} />
         <Route path="anunciosporcat/:nombre" element={<PintarUnaCategoria />} />
         {
            rolFireBase === 'user' ? 
            (
               <Route path="/user/*" element={<UserRouter />} />
            ) 
            : (rolFireBase === 'admin' ? 
            (
               <Route path="/admin/*" element={<AdminRouter />} />
            ) 
            : 
            (
               <Route path="/auth/*" element={<AuthRouter />} />))
            
         }

         <Route path='/*' element={<Navigate to='/' />} />

      </Routes>

   )
}
