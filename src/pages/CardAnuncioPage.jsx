import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Producto } from '../components/Producto';

const CardAnuncioPage = () => {
    const { id } = useParams();
    const url = `http://localhost:3000/api/v1/ventafacil/ads/anuncio/${id}`;
    const method = 'GET';
    const response = useFetch(url, method);

    console.log(response);

    if (!response.ok || !response.data) {
        return <div>Error or Loading...</div>;
    }

    const anuncio = response.data;

    return (
        <div>
        <h1 className='text-start text-light'>Anuncios</h1>
            <Producto
                {...anuncio}
            />
        </div>
    );
};

export default CardAnuncioPage;
