import React, { useEffect, useState } from 'react';
import { dataFetch } from '../../helpers/dataFetch';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom'


export const TablaUser = () => {

    const [anuncios, setAnuncios] = useState([]);

    useEffect(() => {
        async function fetchAnuncios() {
            const data = await dataFetch('http://localhost:3000/api/v1/users', 'GET');
            setAnuncios(data.users);  // Correção aqui
        }

        fetchAnuncios();
    }, []);

    return (
        <>
            <h1 className='text-center text-light'>Usuarios</h1>
            
                <table className="table table-dark table-hover">
                    <thead className="bg-gray text-white">
                        <tr>
                            <th className="col">uid</th>
                            <th className="col">Nome de Usuário</th>
                            <th className="col">Email</th>
                            <th className="col">Data de Criação</th>
                            <th className="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {anuncios.map((anuncio, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                <td >{anuncio.uid_firebase}</td>
                                <td >{anuncio.username}</td>
                                <td >{anuncio.email}</td>
                                <td >{anuncio.fecha}</td>
                                <td >



                                    <Link clasname='btn btn-dark' to={`/admin/user/${anuncio.uid_firebase}`} >
                                        Ver más
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
            <Outlet />
        </>
    )
}
