import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { HomePage, CategoriaPage, GalleryPage } from '../pages';
import { AuthRouter } from '../auth/routes/AuthRouter';
import { UserRouter } from '../user/routes/UserRouter';
import { AdminRouter } from '../admin/routes/AdminRouter';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import CardAnuncioPage from '../pages/CardAnuncioPage';






export const AppRouter = () => {


   const { user } = useContext(UserContext);
   const { typeUser } = user





   return (



      <Routes>

         <Route path="/" element={<HomePage />}/>

           

         <Route path="producto/:id" element={<CardAnuncioPage />} />
         <Route path="/galeria/:id" element={<GalleryPage />} />
         <Route path="/producto/:id" element={<CardAnuncioPage />} />
         <Route path="/categoria" element={<CategoriaPage />}>
            <Route path="galeria/:id" element={<GalleryPage />}>

            </Route>
         </Route>

         {
            typeUser === 'user' ? (
               <Route path="/user/*" element={<UserRouter />} />
            ) : typeUser === 'admin' ? (
               <Route path="/admin/*" element={<AdminRouter />} />
            ) : (
               <Route path="/auth/*" element={<AuthRouter />} />
            )
         }

         <Route path='/*' element={<Navigate to='/' />} />

      </Routes>








   )
}
