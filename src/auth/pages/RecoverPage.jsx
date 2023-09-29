import React from 'react';
import { RecoverForm } from '../components/RecoverForm';

export const RecoverPage = () => {
    return (
        <div>
            <Outlet />
            <RecoverForm />
        </div>
    );
};
