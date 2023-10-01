import { firebaseApp } from '../config/firebaseConfig';
import { getAuth, updatePassword } from 'firebase/auth';
const auth = getAuth(firebaseApp);

export const changePass = async (newPassword) => {
    const user = auth.currentUser
    try {
        if (user) {
            await updatePassword(user, newPassword);
            alert('Contraseña actualizada')
        } else {
            alert('Inicia sesion o pulsa en recuperacion de contraseña')
        }
    } catch (error) {
        console.log(error)
    };
};
