import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    const { data, handleSubmit, handleChange } = useForm('')
  
// FALTA ENVIO A FIREBASE CON FECTCH
    return (
        <div>
            <form onSubmit={handleSubmit} method='POST'>
                <div>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={data}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data}
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" value='Inicia sesion' />

                <Link to='/recover' >Olvidé la contraseña</Link>
            </form>
        </div>
    );
};
