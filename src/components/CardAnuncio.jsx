import React, { useState } from 'react';

export const CardAnuncio = ({ ruta_foto, categoria, producto, precio }) => {

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
               
            </div>
          </div>
        </>
    );
}
