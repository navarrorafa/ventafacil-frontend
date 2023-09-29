import { Routes, Route } from 'react-router-dom';
import { HomePage, CardAnuncioPage, CategoriaPage, GalleryPage } from '../pages';
import { AuthRouter } from '../auth/routes/AuthRouter';
import { UserRouter } from '../user/routes/UserRouter';
import { AdminRouter } from '../admin/routes/AdminRouter';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';


export const AppRouter = () => {

   const { typeUser } = useContext(UserContext);

   return (

      <Routes>

         <Route path="/" element={<HomePage />}>
            <Route path="/galeria" element={<GalleryPage />}>
               <Route path="/galeria/producto/:id" element={<CardAnuncioPage />} />
            </Route>
         </Route>

         <Route path="/categoria" element={<CategoriaPage />}>
            <Route path="/categoria/galeria" element={<GalleryPage />}>
               <Route path="/categoria/galeria/producto/:id" element={<CardAnuncioPage />} />
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
