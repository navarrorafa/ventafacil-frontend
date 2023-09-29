
import { useForm } from '../../hooks/useForm';
import { useUserManager } from '../src/user/hooks/useUserManager';
import { SelectProvincia } from '../../components/SelectProvincia';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useDatosUser } from '../src/user/hooks/useDatosUser';





export const CrearFormUser = ({ mode }) => {


    const { user } = useContext(UserContext);
    const { userData } = useDatosUser()
    

    const { emailFireBase, uidFireBase, rolFireBase } = user;


    const { createUser, updateUser } = useUserManager();
    
    const { handleChange, handleSubmit, data, submited } = useForm()

    const onSubmit = async (ev) => {
        ev.preventDefault();
        const newUser = data;
        console.log('Dados do formulário:', newUser);
        const url = mode === 'update'
            ? `http://localhost:3000/api/v1/users/${uidFireBase}`
            : 'http://localhost:3000/api/v1/users/create';

        if (mode === 'update') {
           await  updateUser(newUser, url);
        } else {
            await createUser(newUser, url);
        }
    };



    return (
        <>




            <pre>{JSON.stringify(data)}</pre>
            <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">

                    <input
                        type="text"
                        placeholder="uid_Firebase"
                        id="uid_Firebase"
                        name="uid_Firebase"
                        value={uidFireBase || (mode === 'update' ? (userData.uid_Firebase || '') : uidFireBase)}
                        onChange={handleChange}
                        hidden
                    />

                    <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                    <input
                        type="text"
                        placeholder="Nombre"
                        id="nombre"
                        name="nombre"
                        defaultValue={mode === 'update' ? (userData.nombre || '') : (data.nombre || '')}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />

                    <label htmlFor="apellidos" className="block text-gray-700 text-sm font-bold mb-2">Apellidos:</label>
                    <input
                        type="text"
                        placeholder="Apellidos"
                        id="apellidos"
                        name="apellidos"
                        defaultValue={mode === 'update' ? (userData.apellidos || '') : (data.apellidos || '')}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />

                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        name="username"
                        defaultValue={mode === 'update' ? (userData.username || '') : (data.username || '')}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />

                    <input
                        type="text"
                        placeholder="Email"
                        id="email"
                        name="email"
                        defaultValue={emailFireBase || ""} 
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />

                    <input
                        type="text"
                        placeholder="rol"
                        id="rol"
                        name="rol"
                        defaultValue={rolFireBase || ""} 
                        onChange={handleChange}
                        hidden
                    />


                    <label htmlFor="contacto" className="block text-gray-700 text-sm font-bold mb-2">Contacto:</label>
                    <input
                        type="tel"
                        placeholder="Contacto"
                        id="contacto"
                        name="contacto"
                        defaultValue={mode === 'update' ? (userData.contacto || '') : (data.contacto || '')}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <SelectProvincia defaultValue={mode === 'update' ? (userData.provincia || '') : (data.provincia || '')} handleChange={handleChange} />

                    <label htmlFor="ciudad" className="block text-gray-700 text-sm font-bold mb-2">Ciudad:</label>
                    <input
                        type="text"
                        placeholder="Ciudad"
                        id="ciudad"
                        name="ciudad"
                        defaultValue={mode === 'update' ? (userData.ciudad || '') : (data.ciudad || '')}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />

                    <input
                        type="text"
                        placeholder="Fecha"
                        id="fecha"
                        name="fecha"
                        defaultValue={mode === 'update' ? (userData.fecha || '') : (data.fecha || '')}
                        onChange={handleChange}
                        hidden />








                </div>


                {/* <div className="flex items-center justify-between"> */}
                <input
                    type="submit"
                    value={mode === 'update' ? 'Actualizar' : 'Crear'}
                // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                />
                {/* </div> */}


            </form>
        </>
    )
}


