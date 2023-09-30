import React, { useState } from 'react';
import { dataFetch } from '../helpers/dataFetch';
import { UserContext } from './UserContext';



export const UserProvider = ({ children }) => {
   const urlUid = "url a coger"

    const [user, setUser] = useState({

        uidFireBase: "787987",
        emailFireBase: "navarro.cadastro@gmail.com",
        rolFireBase: "user",
        typeUser: "guest"

    });


  


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
            
        </UserContext.Provider>
    );
};
