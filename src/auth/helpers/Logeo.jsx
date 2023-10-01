// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useForm } from '../../hooks/useForm';
// import { UserContext } from '../../context/UserContext';
// import { firebaseApp } from '../config/firebaseConfig';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// const auth = getAuth(firebaseApp);

// export const Logeo = async () => {
//     const { data, handleChange } = useForm('')
//     const [envio, setEnvio] = useState([])
//     const [errorCode, setErrorCode] = useState('')
//     const { updateUser } = useContext(UserContext)
//     const navigate = useNavigate()



//     const onSubmit = async (ev) => {
//         ev.preventDefault();
//         const newData = data

//        await handleLogin(newData)
//         // navigate('/auth/register')
//     }

//     const handleLogin = async (newData) => {
//         setEnvio(newData)
//         const { email, password } = data
//         await login(email, password, updateUser)

//     };

//     const login = async (email, password, updateUser) => {
//         try {
//             const resp = await signInWithEmailAndPassword(auth, email, password);

//             const profileData = {
//                 uidFireBase: resp.user.uid,
//                 emailFireBase: resp.user.email,
//                 rolFireBase: resp.user.displayName
//             };
//             updateUser(profileData)

//         } catch (error) {
//             if (error.code === 'auth/invalid-login-credentials') {

//                 setErrorCode('Usuario o contraseña incorrectos')
//             } else {
//                 setErrorCode(error.code)
//             };
//         };
//     };

//     return (
//         <div>
//             <h1>Inicio de Sesión</h1>
//             {/* <p>{errorCode}</p> */}
//             <form onSubmit={onSubmit} method='POST'>
//                 <label htmlFor="email">Correo electrónico</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder='Introduce email..'
//                     value={data.email}
//                     onChange={handleChange}

//                 />
//                 <label htmlFor="password">Contraseña</label>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     placeholder='Contraseña'
//                     value={data.password}
//                     onChange={handleChange}
//                 />
//                 <input type="submit" value='Inicia sesión' />

//                 <Link to='/auth/recover' >Olvidé la contraseña</Link>
//             </form>
//         </div>
//     )
// }
