import { Routes, Route } from 'react-router-dom';
import React from 'react'
import { LogRegPage, RecoverPage } from '../pages';

export const AuthRouter = () => {
    return (

        <>

            <Routes>
                <Route path="login" element={<LogRegPage />} />
                
                <Route path="recover" element={<RecoverPage />} />
            </Routes>
        </>
    )
}
