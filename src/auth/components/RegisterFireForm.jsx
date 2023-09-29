import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useFetch } from '../../hooks/useFetch';
import { dataFetch } from '../../helpers/dataFetch';

export const RegisterFireForm = () => {

  const { data, handleSubmit, handleChange } = useForm('')
  const [datos, setDatos] = useState([])

  const url = 'http://localhost:3000/api/v1/auth/register';

  const onSubmit = (ev) => {
    ev.preventDefault();
    const newData = data

    register(newData)
  }

  const register = async (newData) => {
    setDatos(newData)
    const registro = await dataFetch(url, 'POST', data)
    // console.log('newData', newData)
  };

  return (
    <div>
      <h1>Registro</h1>

      <form onSubmit={onSubmit} method='POST'>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder='Introduce email..'
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Introduce contraseña..'
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value='enviar' />
      </form>
    </div>
  );
};
