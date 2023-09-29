import React, { useState } from 'react';
import { UserContext } from './UserContext';


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        uid_firebase: "4564654",
        email: "rafa@gmail.com",
        typeUser: "user"
    });


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};


