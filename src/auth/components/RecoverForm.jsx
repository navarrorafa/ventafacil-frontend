import React from 'react'
import { useForm } from '../../hooks/useForm';

export const RecoverForm = () => {
    const { data, handleSubmit, handleChange } = useForm()
    // FALTA ENVIO A FIREBASE CON FETCH
    return (
        <div>
            <h1>Recuperacion de contraseña</h1>
        <form onSubmit={handleSubmit} method='POST'>

            <label for="email">Correo electrónico</label>
            <input
                type="text"
                id="email"
                name="email"
                value={data}
                onChange={handleChange}
            />

            <input type="submit" value='Recuperar contraseña' />
        </form>
        </div>
    );
};