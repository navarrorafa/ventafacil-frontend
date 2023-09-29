//  <input
// type="text"
// placeholder="uid_Firebase"
// id="uid_Firebase"
// name="uid_Firebase"
// value={uidFireBase || (mode === 'update' ? (userData.uid_Firebase || '') : '')}
// onChange={handleChange}
// />

// <label htmlFor="nombre">Nombre:</label>
// <input
// type="text"
// placeholder="Nombre"
// id="nombre"
// name="nombre"
// value={mode === 'update' ? (userData.nombre || '') : (data.nombre || '')}
// onChange={handleChange}
// />

// <label htmlFor="apellidos">Apellidos:</label>
// <input
// type="text"
// placeholder="Apellidos"
// id="apellidos"
// name="apellidos"
// value={mode === 'update' ? (userData.apellidos || '') : (data.apellidos || '')}
// onChange={handleChange}
// />

// <label htmlFor="username">Username:</label>
// <input
// type="text"
// placeholder="Username"
// id="username"
// name="username"
// value={mode === 'update' ? (userData.username || '') : (data.username || '')}
// onChange={handleChange}
// disabled={mode === 'update'}
// />

// <label htmlFor="email">Email:</label>
// <input
// type="text"
// placeholder="Email"
// id="email"
// name="email"
// value={emailFireBase || (mode === 'update' ? (userData.email || '') : '')}
// onChange={handleChange}
// />

// <input
// type="text"
// placeholder="rol"
// id="rol"
// name="rol"
// value={rolFireBase || (mode === 'update' ? (userData.rol || '') : '')}
// onChange={handleChange}
// />

// <label htmlFor="contacto">Contacto:</label>
// <input
// type="tel"
// placeholder="Contacto"
// id="contacto"
// name="contacto"
// value={mode === 'update' ? (userData.contacto || '') : (data.contacto || '')}
// onChange={handleChange}
// />
// <SelectProvincia valueData={mode === 'update' ? (userData.provincia || '') : (data.provincia || '')} handleChange={handleChange}/>

// <label htmlFor="ciudad">Ciudad:</label>
// <input
// type="text"
// placeholder="Ciudad"
// id="ciudad"
// name="ciudad"
// value={mode === 'update' ? (userData.ciudad || '') : (data.ciudad || '')}
// onChange={handleChange}
// />

// <input
// type="text"
// placeholder="Fecha"
// id="fecha"
// name="fecha"
// value={mode === 'update' ? (userData.fecha || '') : (data.fecha || '')}
// onChange={handleChange}
// hidden 









<div>
        <div className="navbar-logo">
          <p>VentaFacil</p>
        </div>

        <nav className="navbar">
          <ul className="navbar-links">

            <li className='nav-item'>
              <NavLink
                to='/'
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/categoria'
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Categoria
              </NavLink>
            </li>
            {
              typeUser === 'user' ? (
                <>
                  <NavUser />
                  <BottonLogout />
                </>
              ) : typeUser === 'admin' ? (
                <>
                  <NavAdmin />
                  <BottonLogout />
                </>
              ) : (
                <>
                  <NavGuest />
                </>
              )
            }
          </ul>

        </nav>
      </div>




// ------------------



// import { useForm } from '../../hooks/useForm';
// import { useUserManager } from '../hooks/useUserManager';
// import { SelectProvincia } from '../../components/SelectProvincia';
// import { useContext } from 'react';
// import { useDatosUser } from '../hooks/useDatosUser';
// import { UserContext } from '../../context/UserContext';




// export const CrearFormUser = ({ mode }) => {


//     const { user } = useContext(UserContext);
//     // const { userData } = useDatosUser( {mode} );  

//     const { emailFireBase, uidFireBase, rolFireBase } = user;
//     // console.log('UidFireBase:', uidFireBase);

//     const { createUser, updateUser } = useUserManager();
//     const { handleChange, handleSubmit, data, submited } = useForm()

//     const onSubmit = (ev) => {
//         ev.preventDefault();
//         const newUser = data;

//         const url = mode === 'update'
//             ? `http://localhost:3000/api/v1/users/${uidFireBase}`
//             : 'http://localhost:3000/api/v1/users/create';

//         if (mode === 'update') {
//             updateUser(newUser, url);
//         } else {
//             createUser(newUser, url);
//         }
//     };



//     return (
//         <>
//             <pre>{JSON.stringify(data)}</pre>
//             <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md">
//                 <div className="mb-4">
//                     <label htmlFor="uid_Firebase" className="block text-gray-700 text-sm font-bold mb-2">uid_Firebase:</label>
//                 <input
//                     type="text"
//                     placeholder="uid_Firebase"
//                     id="uid_Firebase"
//                     name="uid_Firebase"
//                     value={uidFireBase|| ''}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     onChange={handleChange}
//                 />

//                 <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
//                 <input
//                     type="text"
//                     placeholder="Nombre"
//                     id="nombre"
//                     name="nombre"
//                     value={data.nombre || ''}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     onChange={handleChange}
//                 />

//                 <label htmlFor="apellidos"className="block text-gray-700 text-sm font-bold mb-2">Apellidos:</label>
//                 <input
//                     type="text"
//                     placeholder="Apellidos"
//                     id="apellidos"
//                     name="apellidos"
//                     value={data.apellidos || ''}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     onChange={handleChange}
//                 />

//                 <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     id="username"
//                     name="username"
//                     value={data.username || ''}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     onChange={handleChange}
//                     // disabled={mode === 'update'}
//                 />

//                 <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
//                 <input
//                     type="text"
//                     placeholder="Email"
//                     id="email"
//                     name="email"
//                     value={emailFireBase || ''}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     onChange={handleChange}
//                 />

//                 <input
//                     type="text"
//                     placeholder="rol"
//                     id="rol"
//                     name="rol"
//                     value={rolFireBase || ''}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     onChange={handleChange}
//                 />

//                 <label htmlFor="contacto" className="block text-gray-700 text-sm font-bold mb-2">Contacto:</label>
//                 <input
//                     type="tel"
//                     placeholder="Contacto"
//                     id="contacto"
//                     name="contacto"
//                     value={data.contacto || ''}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     onChange={handleChange}
//                 />
//                 <SelectProvincia valueData={data.provincia || ''} handleChange={handleChange} />

//                 <label htmlFor="ciudad" className="block text-gray-700 text-sm font-bold mb-2">Ciudad:</label>
//                 <input
//                     type="text"
//                     placeholder="Ciudad"
//                     id="ciudad"
//                     name="ciudad"
//                     value={data.ciudad || ''}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     onChange={handleChange}
//                 />

//                 <input
//                     type="text"
//                     placeholder="Fecha"
//                     id="fecha"
//                     name="fecha"
//                     value={data.fecha || ''}
//                     onChange={handleChange}
//                     hidden
//                 />
//                  </div>
                
                
//                  {/* <div className="flex items-center justify-between"> */}
//                     <input
//                         type="submit"
//                         value={mode === 'update' ? 'Actualizar' : 'Crear'}
//                         // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     />
//                 {/* </div> */}
                

//             </form>
//         </>
//     )
// }


