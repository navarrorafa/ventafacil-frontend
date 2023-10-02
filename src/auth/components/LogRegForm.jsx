import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { UserContext } from '../../context/UserContext';
import { login, register } from '../helpers';

export const LogRegForm = () => {
    const [logeando, setLogeando] = useState(false)
    const { data, handleChange } = useForm('')
    const [envio, setEnvio] = useState([])
    const { updateUser } = useContext(UserContext)
    const navigate = useNavigate()

    const onSubmit = (ev) => {
        ev.preventDefault();
        const newData = data

        logReg(newData)
        logeando?
        navigate('/user') :
        setTimeout(() => {
            navigate('/register');
        }, 1050); 
    }

    const logReg = async (newData) => {
        setEnvio(newData)

        const { email, password } = data

        logeando ?
            await login(email, password, updateUser) :
            await register(email, password, updateUser)

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

                {logeando && <Link to='/auth/recover' >Olvidé la contraseña</Link>}
            </form>
        </div>
    )
}
