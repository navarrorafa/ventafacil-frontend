import React from 'react';
import { RecoverForm } from '../components/RecoverForm';
import { Outlet } from 'react-router-dom';

export const RecoverPage = () => {
    return (
        <div>
            <Outlet />
            <RecoverForm />
        </div>
    );
};
