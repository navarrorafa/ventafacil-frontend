import { firebaseApp } from '../config/firebaseConfig';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(firebaseApp);

export const logout = async (updateUser) => {
    try {
        await signOut(auth)
        updateUser('')
    } catch (error) {
        console.error('Error:', error);
    }
}
