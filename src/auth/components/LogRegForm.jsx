import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { register } from '../helpers/register';
import { UserContext } from '../../context/UserContext';

export const LogRegForm = () => {
    const [logeando, setLogeando] = useState(false)
    const { data, handleChange } = useForm('')
    const [envio, setEnvio] = useState([])
    const [datauser, setDatauser] = useState({})
    
    const onSubmit = (ev) => {
        ev.preventDefault();
        const newData = data

        logReg(newData)
    }

    const logReg = async (newData) => {
        setEnvio(newData)
        const {email, password} = data
        
          const datosFire =  await register(email, password)
            setDatauser(datosFire)
    };
    const { user } = useContext(UserContext);
    console.log(user)
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
