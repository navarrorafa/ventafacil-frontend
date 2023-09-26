import { Routes, Route, Navigate, Outlet } from 'react-router-dom';


import React from 'react'
import { LoginPage, RegisterFireBasePage, RegisterPage } from '../pages';

export const AuthRouter = () => {
    return (
   
        <>

        <Routes>

            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterFireBasePage />}>
                <Route path="user" element={<RegisterPage />} />
            </Route>
            </Routes>
        </>
    )
}
