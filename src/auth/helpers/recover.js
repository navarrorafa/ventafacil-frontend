import { firebaseApp } from '../config/firebaseConfig';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
const auth = getAuth(firebaseApp);

export const recover = async (email) => {

    try {
        await sendPasswordResetEmail(auth, email);
alert (`Correo de recuperación enviado! Si ${email} tiene cuenta asociada, recibirá un email de recuperacion.`)
    } catch (error) {
        console.log('Error:', error)
    }
}
