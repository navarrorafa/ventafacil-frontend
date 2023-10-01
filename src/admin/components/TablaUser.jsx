import React, { useEffect, useState } from 'react';
import { dataFetch } from '../../helpers/dataFetch';
import { Outlet } from 'react-router-dom';
import {Link} from 'react-router-dom'


export const TablaUser = () => {

    const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    async function fetchAnuncios() {
      const data = await dataFetch('http://localhost:3000/api/v1/users' , 'GET');
      setAnuncios(data.users);  // Correção aqui
    }

    fetchAnuncios();
  }, []);

  return (
    <>

   <div className="overflow-x-auto md:overflow-hidden">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="py-2 px-4 text-left">uid</th>
                        <th className="py-2 px-4 text-left">Nome de Usuário</th>
                        <th className="py-2 px-4 text-left">Email</th>
                        <th className="py-2 px-4 text-left">Data de Criação</th>
                        <th className="py-2 px-4 text-left">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {anuncios.map((anuncio, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                            <td className="py-2 px-4">{anuncio.uid_firebase}</td>
                            <td className="py-2 px-4">{anuncio.username}</td>
                            <td className="py-2 px-4">{anuncio.email}</td>
                            <td className="py-2 px-4">{anuncio.fecha}</td>
                            <td className="py-2 px-4">
                                <Link to={`/admin/user/${anuncio.uid_firebase}`} className="text-blue-500 hover:underline">
                                    Ver más
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
<Outlet/>
</>
  )
}
