import React, { useState } from 'react';
import { UserContext } from './UserContext';
import { dataFetch } from '../helpers/dataFetch';



export const UserProvider = ({ children }) => {
   const urlUid = "url a coger"

    const [user, setUser] = useState({
        uidFireBase: "45864",
        emailFireBase: "rafa@gmail.com",
        rolFireBase: "user",
        typeUser: "user"
    });


  


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};


