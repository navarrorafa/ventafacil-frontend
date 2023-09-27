import { useContext } from 'react';
import UserContext from './UserContext';

export const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('erro');
    }

    return context;
};

