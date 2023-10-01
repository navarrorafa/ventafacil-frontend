import { firebaseApp } from '../config/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
const auth = getAuth(firebaseApp);

export const register = async (email, password, updateUser) => {
    try {
        const resp = await createUserWithEmailAndPassword(auth, email, password);
        //Almacenamiento del rol en la propiedad displayName
        await updateProfile(resp.user, { displayName: 'user' })
        //Datos necesarios para formulario SQL
        const profileData = {
            uidFireBase: resp.user.uid,
            emailFireBase: resp.user.email,
            rolFireBase: resp.user.displayName
        };
        updateUser(profileData)

    } catch (error) {
        if (error.code === 'auth/weak-password') {

            alert('La contraseña debe ser de al menos seis caracteres');

        }
        if (error.code === 'auth/email-already-in-use') {

            alert('Ya existe una cuenta asociada a ese email');
            
        } else {
            console.log(error);
        };
    };
};
