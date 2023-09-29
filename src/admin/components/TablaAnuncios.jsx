import React from 'react';
import { Link } from 'react-router-dom';

export const TablaAnuncios = () => {

    return (
        <table>
            <thead>
                <tr>
                    <th>ID Anuncio</th>
                    <th>Nombre del Producto</th>
                    <th>ID Vendedor</th>
                    <th>Fecha de Publicación</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {anuncios.map((anuncio) => (
                    <tr key={anuncio.id_anuncio}>
                        <td>{anuncio.id_anuncio}</td>
                        <td>{anuncio.nombre_producto}</td>
                        <td>{anuncio.id_vendedor}</td>
                        <td>{anuncio.fecha_publicacion}</td>
                        <td>{anuncio.estado}{/*vendido && anuncio.id_comprador*/}</td>
                        <td>
                            <Link to={`/producto/${id}`} className='btn'>Ver</Link>
                            <Link to={`/borrarproducto/${id}`} className='btn'>Borrar</Link>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}