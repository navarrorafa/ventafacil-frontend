import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { Link, NavLink } from 'react-router-dom';
import { BackButton } from './BackButton';

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
    zona_geografica,
    id_comprador
}) => {
    const { user } = useContext(UserContext);
    const { uidFireBase, rolFireBase } = user

    const showEditButton = uidFireBase === id_vendedor && !id_comprador;
    const showBuyButton = rolFireBase === 'user' && uidFireBase !== id_vendedor && !id_comprador;
    const showRegisterLink = rolFireBase !== 'admin' && rolFireBase !== 'user';



    return (
        <>
            <section className='bg-dark m-2'>
                <h2 className='card-title text-dark text end'>{producto} - {precio}€</h2>
                <article>
                    <div>
                        <img src={ruta_foto} alt={producto} />
                    </div>
                    <div className="card-body">
                        <p className='card-subtitle'>{zona_geografica} - {fecha_anuncio}</p>
                        <p>{descripcion}</p>
                    </div>
                    <a className='btn btn-success' href={enlace_pago}>Comprar</a>
                </article>
                <BackButton />
            </section>
            <div>

                {showEditButton && (
                    <Link className='btn btn-dark' to={`/user/editar/${id_anuncio}`}>Editar</Link>
                )}


                {showBuyButton && (
                    <Link className='btn btn-success'to={{ state: { enlace_pago: true } }}>Comprar</Link>
                )}

                {showRegisterLink && (
                    <Link className='btn btn-dark' to="/auth/login">Registro</Link>
                )}
            </div>
        </>
    )
}
