import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { LoginPage, RecoverPage, RegisterFireBasePage, RegisterPage } from '../pages';

export const AuthRouter = () => {
    return (

        <>
            <Routes>
                <Route path="/login" element={<LoginPage />}>
                    <Route path="/recover" element={<RecoverPage />} />
                </Route>

                <Route path="/register" element={<RegisterFireBasePage />}>
                    <Route path="/user" element={<RegisterPage />} />
                </Route>
            </Routes>
        </>
    );
};
