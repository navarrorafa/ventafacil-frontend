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
            <div className="overflow-x-auto md:overflow-hidden">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-2 px-4 text-left">ID Anuncio</th>
                            <th className="py-2 px-4 text-left">Producto</th>
                            <th className="py-2 px-4 text-left">ID Vendedor</th>
                            <th className="py-2 px-4 text-left">ID Comprador</th>
                            <th className="py-2 px-4 text-left">Fecha Anuncio</th>
                            <th className="py-2 px-4 text-left">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {anuncios.map((anuncio, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                <td className="py-2 px-4">{anuncio.id_anuncio}</td>
                                <td className="py-2 px-4">{anuncio.producto}</td>
                                <td className="py-2 px-4">{anuncio.id_vendedor}</td>
                                <td className="py-2 px-4">{anuncio.id_comprador}</td>
                                <td className="py-2 px-4">{anuncio.fecha_anuncio}</td>
                                <td className="py-2 px-4">
                                    <Link to={`/admin/anuncio/${anuncio.id_anuncio}`} className="text-blue-500 hover:underline">
                                        Ver más
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Outlet />
        </>
    );
};

export default TablaAnuncios;
