import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useFetch } from '../../hooks/useFetch';

export const RegisterFireForm = () => {

  const { data, handleSubmit, handleChange } = useForm()

  const register = () => {
    const url = 'http://localhost:3000/api/v1/auth/register';

    const registro = useFetch(url, 'POST', data)
    console.log(registro)

  };

  useEffect(() => {
    register()

  }, [handleSubmit])

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
        <input type="submit" value='enviar' />
      </form>
    </div>
  );
};
