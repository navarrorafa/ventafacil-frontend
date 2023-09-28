import { useState } from 'react'

export const useAnunciosList = () => {

    const [anuncios, setAnuncios] = useState([]);

    const handleVer = (id) => {
        // renderiza pagina de anuncio individual
    };

    const handleEditar = (id) => {
        // renderiza formulario de editar anuncio
    };

    const handleBorrar = (id) => {
        // llamada DELETE por ID a la api
        //y seguidamente setea el nuevo array sin ese anuncio borrado
        const nuevosAnuncios = anuncios.filter((anuncio) => anuncio.id_anuncio !== id);
        setAnuncios(nuevosAnuncios);
    };
    return {
        anuncios,
        handleVer,
        handleEditar,
        handleBorrar
    };
};
