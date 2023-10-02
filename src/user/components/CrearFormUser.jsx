import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useDatosUser } from "../hooks/useDatosUser";
import { useUserManager } from "../hooks/useUserManager";
import { useForm } from "../../hooks/useForm";
import { SelectProvincia } from "../../components/SelectProvincia";




export const CrearFormUser = ({ mode }) => {
    const { user } = useContext(UserContext);

    const { emailFireBase, uidFireBase, rolFireBase } = user;

    const { userData} = useDatosUser(initialValues)
    console.log(user)
    
    const { createUser, updateUser } = useUserManager();
    const initialValues = {
        uid_Firebase: uidFireBase || (mode === 'update' ? userData.uid_Firebase : ''),
        nombre: mode === 'update' ? userData.nombre : user.nombre || '',
        apellidos: mode === 'update' ? userData.apellidos : user.apellidos || '',
        username: mode === 'update' ? userData.username : user.username || '',
        email: emailFireBase || '',
        rol: rolFireBase || '',
        contacto: mode === 'update' ? userData.contacto : user.contacto || '',
        provincia: mode === 'update' ? userData.provincia : user.provincia || '',
        ciudad: mode === 'update' ? userData.ciudad : user.ciudad || '',
        fecha: mode === 'update' ? userData.fecha : user.fecha || ''
    };
    console.log(initialValues)
    
    const { handleChange, data} = useForm(initialValues)


    const onSubmit = async (ev) => {
        ev.preventDefault();
        const newUser = data;
        console.log('Dados do formulário:', newUser);
        const url = mode === 'update'
            ? `http://localhost:3000/api/v1/users/${uidFireBase}`
            : 'http://localhost:3000/api/v1/users/create';

        if (mode === 'update') {
            await updateUser(newUser, url);
        } else {
            await createUser(newUser, url);
        }
    };



    return (
        <>



            <h1 className="text-center text-light">Mi Perfil</h1>

            <form className="form-control bg-transparent p-2" onSubmit={onSubmit}>


                <input
                    className='form-control mb-2'
                    type="text"
                    placeholder="uid_Firebase"
                    id="uid_Firebase"
                    name="uid_Firebase"
                    value={uidFireBase || (mode === 'update' ? (userData.uid_Firebase || '') : uidFireBase)}
                    onChange={handleChange}
                    hidden
                />

                <label htmlFor="nombre"></label>
                <input
                    className='form-control mb-2'
                    type="text"
                    placeholder="Nombre"
                    id="nombre"
                    name="nombre"
                    defaultValue={mode === 'update' ? (userData.nombre || '') : (data.nombre || '')}
                    onChange={handleChange}
                />

                <label htmlFor="apellidos"></label>
                <input
                    className='form-control mb-2'
                    type="text"
                    placeholder="Apellidos"
                    id="apellidos"
                    name="apellidos"
                    defaultValue={mode === 'update' ? (userData.apellidos || '') : (data.apellidos || '')}
                    onChange={handleChange}
                />

                <label htmlFor="username"></label>
                <input
                    className='form-control mb-2'
                    type="text"
                    placeholder="Username"
                    id="username"
                    name="username"
                    defaultValue={mode === 'update' ? (userData.username || '') : (data.username || '')}
                    onChange={handleChange}
                />

                <input
                    className='form-control mb-2 text-end'
                    type="text"
                    placeholder="Email"
                    id="email"
                    name="email"
                    defaultValue={emailFireBase || ""}
                    onChange={handleChange}
                    disabled
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


                <label htmlFor="contacto"></label>
                <input
                    className='form-control mb-2'
                    type="tel"
                    placeholder="Contacto"
                    id="contacto"
                    name="contacto"
                    defaultValue={mode === 'update' ? (userData.contacto || '') : (data.contacto || '')}
                    onChange={handleChange}
                />
                <SelectProvincia  defaultValue={mode === 'update' ? (userData.provincia || '') : (data.provincia || '')} handleChange={handleChange} />

                <label htmlFor="ciudad"></label>
                <input
                    className='form-control mb-2'
                    type="text"
                    placeholder="Ciudad"
                    id="ciudad"
                    name="ciudad"
                    defaultValue={mode === 'update' ? (userData.ciudad || '') : (data.ciudad || '')}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Fecha"
                    id="fecha"
                    name="fecha"
                    defaultValue={mode === 'update' ? (userData.fecha || '') : (data.fecha || '')}
                    onChange={handleChange}
                    hidden />

                <input
                    className='btn btn-success m-2'
                    type="submit"
                    value={mode === 'update' ? 'Actualizar' : 'Crear'}
                />
                


            </form>
        </>
    )
}

