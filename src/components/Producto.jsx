import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { Link, NavLink } from 'react-router-dom';

export const Producto = ({ 
    categoria, descripcion,
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
    zona_geografica ,
    id_comprador 
}) => {
    const { user } = useContext(UserContext);
    const {uidFireBase , rolFireBase} = user

    const showEditButton = uidFireBase === id_vendedor && !id_comprador;
    const showBuyButton = rolFireBase === 'user' && uidFireBase !== id_vendedor && !id_comprador;
    const showRegisterLink = rolFireBase !== 'admin' && rolFireBase !== 'user';
      
   

    return (
        <>
            <p>{producto}</p>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <p>{categoria}</p>
            <p>{fecha_anuncio}</p>
            <p>{zona_geografica}</p>
            {/* <img src={ruta_foto} alt="" /> */}
            {/* <a href={enlace_pago}>COMPRAR</a> */}
            
   

            <div>
             
                {showEditButton && (
                    <Link to={`/user/editar/${id_anuncio}`}>Editar</Link>  
                )}

               
                {showBuyButton && (
                    <Link to={{  state: { enlace_pago: true } }}>Comprar</Link>  
                )}

                {showRegisterLink && (
                    <Link to="/auth/login">Registro</Link> 
                )}
            </div>
        </>
    )
}
