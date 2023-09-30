import { firebaseApp } from '../config/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(firebaseApp);

export const login = async (email, password, updateUser) => {

    try {
        const loggedIn = await signInWithEmailAndPassword(auth, email, password);

        //Datos necesarios para formulario SQL
        const profileData = {
            uidFireBase: loggedIn.user.uid,
            emailFireBase: loggedIn.user.email,
            rolFireBase: loggedIn.user.displayName
        };
        updateUser(profileData)

    } catch (error) {
        if (error.code === 'auth/invalid-login-credentials') {

            alert ('Usuario o contraseña incorrectos')

        } else {
            console.log(error)
        };
    };
};
