import React, { useState } from 'react';
import { UserContext } from './UserContext';
import { firebaseApp } from '../auth/config/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth(firebaseApp);

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({


        typeUser: "guest"
    });
    const updateUser = (newData) => {
        setUser(newData)
     }
    // onAuthStateChanged(auth, )





    return (
        <UserContext.Provider value={{ user, setUser, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};


