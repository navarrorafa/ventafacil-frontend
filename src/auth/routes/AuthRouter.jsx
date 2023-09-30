import { Routes, Route } from 'react-router-dom';
import React from 'react'
import { LoginPage, RegisterPage, RecoverPage } from '../pages';

export const AuthRouter = () => {
    return (

        <>

            <Routes>
                <Route path="login" element={<LoginPage />}>
                    <Route path="register" element={<RegisterPage />} />
                </Route>

                <Route path="recover" element={<RecoverPage />} />
            </Routes>
        </>
    )
}
