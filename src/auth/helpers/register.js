import { firebaseApp } from '../config/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
const auth = getAuth(firebaseApp);

export const register = async (email, password, updateUser) => {
    try {
        const regUser = await createUserWithEmailAndPassword(auth, email, password);
        //Almacenamiento del rol en la propiedad displayName
        await updateProfile(regUser.user, { displayName: 'user' })
        //Datos necesarios para formulario SQL
        const profileData = {
            uidFireBase: regUser.user.uid,
            emailFireBase: regUser.user.email,
            rolFireBase: regUser.user.displayName
        };
        updateUser(profileData)

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {

            alert('Ya existe una cuenta asociada a ese email');
        } else {
            console.log(error);
        };
    };
};
