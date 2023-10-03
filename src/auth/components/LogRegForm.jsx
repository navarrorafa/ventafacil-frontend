import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { UserContext } from '../../context/UserContext';
import { login, register } from '../helpers';

export const LogRegForm = () => {
    const [logeando, setLogeando] = useState(false)
    const { data, handleChange } = useForm('')
    const [envio, setEnvio] = useState([])
    const { updateUser, user } = useContext(UserContext)
    const { rolFireBase } = user
    const navigate = useNavigate()

    const onSubmit = (ev) => {
        ev.preventDefault();
        const newData = data

        logReg(newData)
        logeando ? (
            rolFireBase ?
                navigate(`/${rolFireBase}`) :
                navigate('/auth/login')
        ) : (rolFireBase ?
    
                navigate('/user/register')
             :
            navigate('/auth/login'));
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
            <h1 className="text-center text-dark"><strong>{logeando ? 'Inicio de sesión' : 'Registro '}</strong></h1>
            <button className='btn btn-dark m-3' onClick={() => setLogeando(!logeando)}>
                {logeando ? 'Crear nueva cuenta' : 'Acceder con mi cuenta'}
            </button>
            <form className="form-control bg-dark" onSubmit={onSubmit} method='POST'>
                <label htmlFor="email"></label>
                <input
                    className='form-control'
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Introduce email..'
                    value={data.email}
                    onChange={handleChange}

                />
                <label htmlFor="password"></label>
                <input
                    className='form-control'
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Contraseña'
                    value={data.password}
                    onChange={handleChange}
                />
                <input className='text-end btn btn-primary m-2' type="submit" value={logeando ? 'Inicia sesión' : 'Regístrate'} />

                {logeando && <Link className='text-danger' to='/auth/recover' >Olvidé la contraseña?</Link>}
            </form>
        </div>
    )
}
