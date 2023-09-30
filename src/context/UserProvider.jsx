import React, { useState } from 'react';
import { UserContext } from './UserContext';
import { firebaseApp } from '../auth/config/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth(firebaseApp);

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState({

        uidFireBase: "45864",
        emailFireBase: "rafa@gmail.com",
        rolFireBase: "user",
 
        typeUser: "guest"
    });

    // onAuthStateChanged(auth, )





    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};


