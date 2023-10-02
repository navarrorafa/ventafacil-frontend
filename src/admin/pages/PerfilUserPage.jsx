import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { dataFetch } from '../../helpers/dataFetch';
import { useUserManager } from '../../user/hooks/useUserManager';
import { TablaMisAnuncios } from '../../user/components/TablaMisAnuncios';


const PerfilUserPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const { deleteUser } = useUserManager();


  useEffect(() => {
    fetchUserData(id, setUsuario);
  }, [id]);

  const fetchUserData = async (id, setUsuario) => {
    try {
      const data = await dataFetch(`http://localhost:3000/api/v1/users/uid/${id}`, 'POST');
      setUsuario(data);
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
    }
  }

  const handleEliminar = async () => {
    await deleteUser(id);
    navigate('/admin/anuncios');
  };


  if (!usuario) return null;

  return (


    <section className="p-4">

      <button onClick={handleEliminar} className=" text-dark m-2">
        Eliminar
      </button>
      <h1 className="text-dark font-bold">Perfil de {usuario.username}</h1>
      <p className="text-dark font-bold"><strong>UID Firebase:</strong> {usuario.uid_firebase}</p>
      <p className="text-dark font-bold"><strong>Nome:</strong> {usuario.nombre}</p>
      <p className="text-dark font-bold"><strong>Sobrenomes:</strong> {usuario.apellidos}</p>
      <p className="text-dark font-bold"><strong>Nome de Usuário:</strong> {usuario.username}</p>
      <p className="text-dark font-bold"><strong>Email:</strong> {usuario.email}</p>
      <p className="text-dark font-bold"><strong>Contato:</strong> {usuario.contacto}</p>
      <p className="text-dark font-bold"><strong>Data de Criação:</strong> {usuario.fecha}</p>
      <p className="text-dark font-bold"><strong>Cidade:</strong> {usuario.ciudad}</p>
      <p className="text-dark font-bold"><strong>Província:</strong> {usuario.provincia}</p>
      <p className="text-dark font-bold"><strong>Rol:</strong> {usuario.rol}</p>
      <p className="text-dark font-bold"><strong>ID:</strong> {usuario.id}</p>

      
      <div>
        <TablaMisAnuncios id={id}/>
      </div>
      <Outlet />

    </section>
  );
}

export default PerfilUserPage;
