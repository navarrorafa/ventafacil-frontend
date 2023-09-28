import React from 'react';
import { useForm } from '../../hooks/useForm';

export const RegisterFireForm = () => {
    const { data, handleSubmit, handleChange } = useForm()
    // FALTA ENVIO A FIREBASE CON FECTCH
  return (
    <div>
        <h1>Registro</h1>

    <form onSubmit={handleSubmit} method='POST'>
      <div>
        <label for="email">Correo electrónico</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder='Introduce email..'
          value={data}
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='Introduce contraseña..'
          value={data}
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="confirmPassword">Confirmar contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder='Confirma contraseña..'
          value={data}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value='enviar' />
    </form>
    </div>
  );
};
