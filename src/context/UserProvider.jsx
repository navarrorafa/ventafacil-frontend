import React, { useState } from 'react';
import { UserContext } from './UserContext';
// import { firebaseApp } from '../auth/config/firebaseConfig';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// const auth = getAuth(firebaseApp);

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({});
    // const [userLogeado, setUserLogeado] = useState(null)
    const updateUser = (newData) => {
        setUser(newData)
    }
    // const keepLogedUser = async () => {
    //     await onAuthStateChanged(auth, (userFirebase) => {
    //         if (userFirebase) {
    //             const userData = {
    //                 uid: user.uidFireBase,
    //                 email: user.emailFireBase,
    //                 rol: user.rolFireBase
    //             };
    //             setUserLogeado(userData)
    //         } else {
    //             setUserLogeado(null)
    //         }
    //     })
    // }

    return (
        <UserContext.Provider value={{ user, setUser, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};


