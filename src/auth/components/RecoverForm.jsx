import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { recover } from '../helpers';
import { useNavigate } from 'react-router';

export const RecoverForm = () => {
    const { data, handleChange } = useForm('')
    const [envio, setEnvio] = useState([])
    const navigate = useNavigate()

    const onSubmit = (ev) => {
        ev.preventDefault();
        const newData = data

        logReg(newData);
        navigate('/auth/login')
    }
    const logReg = async (newData) => {
        setEnvio(newData)
        
        const {email} = data
        await recover(email);
    };

    return (
        <div>
            <h1 className="text-center text-dark">Recuperacion de contraseña</h1>
            <form className="form-control d-flex bg-dark" onSubmit={onSubmit} method='POST'>

                <label htmlFor="email"></label>
                <input
                className='form-control text-right'
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Introduce email..'
                    value={data.email}
                    onChange={handleChange}
                />

                <input className='text-end btn btn-primary m-2' type="submit" value='Recuperar contraseña' />
            </form>
        </div>
    );
};