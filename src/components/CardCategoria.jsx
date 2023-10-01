import React from 'react'

export const CardCategoria = (descripcion, ruta_foto) => {
    

    

    return (
        <>
          <div>
            <div>
                <img src="" alt="" />
                <p>{descripcion}</p>
                <img src={ruta_foto} alt="" />
            </div>
          </div>
        </>
    );
}
