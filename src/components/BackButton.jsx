import React from 'react'
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button className='btn btn-primary m-2' onClick={handleGoBack}>Volver</button>
    );
}