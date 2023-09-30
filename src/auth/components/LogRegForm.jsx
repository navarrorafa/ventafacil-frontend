import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { dataFetch } from '../../helpers/dataFetch';

export const LogRegForm = () => {
    const [logeando, setLogeando] = useState(false)
    const { data, handleChange } = useForm('')
    const [envio, setEnvio] = useState([])
    const url = 'http://localhost:3000/api/v1/auth/register';
    const onSubmit = (ev) => {
        ev.preventDefault();
        const newData = data

        logReg(newData)
    }

    const logReg = async (newData) => {
        setEnvio(newData)
        !logeando ?
            await dataFetch(url, 'POST', data) :
            console.log('logeate')
    };

    return (
        <div>
            <h1>{logeando ? 'Inicio de sesión' : 'Registro '}</h1>
            <button onClick={() => setLogeando(!logeando)}>
                {logeando ? 'Crear nueva cuenta' : 'Acceder con mi cuenta'}
            </button>
            <form onSubmit={onSubmit} method='POST'>
                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Introduce email..'
                    value={data.email}
                    onChange={handleChange}

                />
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Contraseña'
                    value={data.password}
                    onChange={handleChange}
                />
                <input type="submit" value={logeando ? 'Inicia sesión' : 'Regístrate'} />

                {logeando && <Link to='recover' >Olvidé la contraseña</Link>}
            </form>
        </div>
    )
}
