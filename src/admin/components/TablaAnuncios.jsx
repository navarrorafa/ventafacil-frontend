import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { dataFetch } from '../../helpers/dataFetch';


const TablaAnuncios = () => {
    const [anuncios, setAnuncios] = useState([]);

    useEffect(() => {
        const fetchAnuncios = async () => {
            try {
                const res = await dataFetch('http://localhost:3000/api/v1/ventafacil/ads', 'GET');
                const { data } = res;
                if (data && Array.isArray(data)) {
                  setAnuncios(data);
                } else {
                  console.error('Data is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching anuncios:', error);
            }
        };
        
        fetchAnuncios();
    }, []);
    

    return (
        <>
        <h1 className='text-center text-dark'>Anuncios</h1>
            
        <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th className='col text-primary'>ID Anuncio</th>
                            <th className='col text-primary'>Producto</th>
                            <th className='col text-primary'>ID Vendedor</th>
                            <th className='col text-primary'>ID Comprador</th>
                            <th className='col text-primary'>Fecha Anuncio</th>
                            <th className='col text-primary'>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {anuncios.map((anuncio, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray' : 'bg-white'}`}>
                                <td >{anuncio.id_anuncio}</td>
                                <td >{anuncio.producto}</td>
                                <td >{anuncio.id_vendedor}</td>
                                <td >{anuncio.id_comprador}</td>
                                <td >{anuncio.fecha_anuncio}</td>
                                <td >
                                    <Link className='btn btn-dark text-primary border-primary' to={`/admin/anuncio/${anuncio.id_anuncio}`} >
                                        Ver más
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
            <Outlet />
        </>
    );
};

export default TablaAnuncios;
