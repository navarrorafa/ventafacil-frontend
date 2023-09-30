import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';

export const RecoverForm = () => {
    const { data, handleChange } = useForm('')
    const [envio, setEnvio] = useState([])

    const onSubmit = (ev) => {
        ev.preventDefault();
        const newData = data

        logReg(newData)
    }
    const logReg = async (newData) => {
        setEnvio(newData)
        // console.log('email enviado', newData)
        const {email} = newData
        alert (`Email enviado a ${email}, revisa tu correo`)
    };

    return (
        <div>
            <h1>Recuperacion de contraseña</h1>
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

                <input type="submit" value='Recuperar contraseña' />
            </form>
        </div>
    );
};