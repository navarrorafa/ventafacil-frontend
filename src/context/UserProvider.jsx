import React, { useState } from 'react';
import { UserContext } from './UserContext';


export const UserProvider = ({ children }) => {
    const [typeUser, setTypeUser] = useState('guest');  
    const changeTypeUser = (newType) => {
        setTypeUser(newType);
    };

    return (
        <UserContext.Provider value={{ typeUser, changeTypeUser }}>
            {children}
        </UserContext.Provider>
    );
};


