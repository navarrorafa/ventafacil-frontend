import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { HomePage, CardAnuncioPage, CategoriaPage, GalleryPage } from '../pages';
import { AuthRouter } from '../auth/routes/AuthRouter';
import { UserRouter } from '../user/routes/UserRouter';
import { AdminRouter } from '../admin/routes/AdminRouter';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';





export const AppRouter = () => {

   const { user } = useContext(UserContext);
   const typeUser =user 
   

   

   return (



      <Routes>

         <Route path="/" element={<HomePage />}>
            <Route path="galeria" element={<GalleryPage />}>
               <Route path="producto/:id" element={<CardAnuncioPage />} />
            </Route>
         </Route>

         <Route path="/categoria" element={<CategoriaPage />}>
            <Route path="galeria" element={<GalleryPage />}>
               <Route path="producto/:id" element={<CardAnuncioPage />} />
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

      </Routes>








   )
}
