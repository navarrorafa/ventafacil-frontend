import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { dataFetch } from '../../helpers/dataFetch';
import { UserProvider } from '../../context/UserProvider';
import { UserContext } from '../../context/UserContext';

export const TablaMisAnuncios = ({id}) => {
    console.log('ID recebido:', id); 
    const [anuncios, setAnuncios] = useState([]);
const {user}=useContext(UserContext)
const {uidFireBase,rolFireBase} = user
console.log(user)
console.log(rolFireBase)
const uid = rolFireBase === 'admin' ? id: uidFireBase;


console.log(user)
    useEffect(() => {
        const fetchAnuncios = async () => {
            try {
                const res = await dataFetch(`http://localhost:3000/api/v1/ventafacil/ads/buscaridusuario/${uid}`, 'GET');
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
    }, [uid]);
    

    return (
        <>
    <h1 className='text-center text-dark'>Mis articulos a la venta</h1>
                <table className="table table-dark table-hover">
                    <thead className="bg-gray text-white">
                        <tr>
                            <th className="col">ID Anuncio</th>
                            <th className="col">Producto</th>
                            <th className="col">ID Vendedor</th>
                            <th className="col">ID Comprador</th>
                            <th className="col">Fecha Anuncio</th>
                            <th className="col">Acción</th>
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
                                    <Link className='btn btn-dark' to={`/user/editar/${anuncio.id_anuncio}`} >
                                        Editar
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

 

