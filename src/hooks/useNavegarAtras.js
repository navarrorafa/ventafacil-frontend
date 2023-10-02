import { useNavigate } from 'react-router-dom'

export const useNavegarAtras = () => {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    return {
        handleVolver
    };
};
