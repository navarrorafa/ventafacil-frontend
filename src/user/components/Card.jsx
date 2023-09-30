import React from 'react'

export const Card = ({ categoria, descripcion,
    enlace_pago,
    fecha_anuncio,
    id_anuncio,
    id_vendedor,
    nombre_vendedor,
    precio,
    precio_stripe,
    producto,
    producto_latitude,
    producto_longitude,
    producto_stripe,
    ruta_foto,
    zona_geografica }) => {


    return (
        <>
        <p>{producto}</p>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <p>{categoria}</p>
        <p>{fecha_anuncio}</p>
        <p>{zona_geografica}</p>
        <img src={ruta_foto} alt="" />
        <a href={enlace_pago}>COMPRAR</a>
        
       

        
        </>
    )
}
