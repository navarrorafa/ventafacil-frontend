import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const CardAnuncio = ({ ruta_foto, categoria, producto, precio,id_anuncio }) => {

    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        setHasError(true);
    }

    return (
        <>
          <div>
            <div>
                <img src="" alt="" />
                <p>{categoria}</p>
                <p>{producto}</p>
                <p>{precio}</p>
                <Link to={`/producto/${id_anuncio}`}>Ver mas </Link>
               
            </div>
          </div>
        </>
    );
}
