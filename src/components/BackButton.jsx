import React from 'react'
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button className='btn btn-dark' onClick={handleGoBack}>Volver</button>
    );
}