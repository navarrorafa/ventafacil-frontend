import { useContext } from 'react';
import { firebaseApp } from '../config/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { UserContext } from '../../context/UserContext';
const auth = getAuth(firebaseApp);

export const register = async (email, password) => {
    const { updateUser } = useContext(UserContext)
    try {
        const userCreado = await createUserWithEmailAndPassword(auth, email, password);
        //Almacenamiento del rol en la propiedad displayName
        await updateProfile(userCreado.user, { displayName: 'user' })
        //Datos necesarios para formulario SQL
        const datosPerfil = {
            uidFireBase: userCreado.user.uid,
            emailFireBase: userCreado.user.email,
            rolFireBase: userCreado.user.displayName
        };
        updateUser(datosPerfil)

    } catch (error) {
        //Respuesta HTTP 400 Bad Request Correo ya en uso
        if (error.code === 'auth/email-already-in-use') {
            // userCreado.json({
            // ok: false,
            return 'Correo electrónico en uso'
            // });

            // } else {
            //     console.log('Error:', error);
            //     // Respuesta HTTP 500 Internal Server Error
            //     userCreado.json({
            //         ok: false,
            //         message: 'Error interno del servidor'
            //     });
        };
    };
};
