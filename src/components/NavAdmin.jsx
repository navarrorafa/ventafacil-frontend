import {NavLink} from 'react-router-dom'

export const NavAdmin = () => {
  return (
    <>

    <li className='nav-item'>
        <NavLink
            to="/admin/anuncios"
            className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : 'text-light'}`}>
            Anuncios
        </NavLink>
    </li>
    <li className='nav-item'>
        <NavLink
            to="/admin/user"
            className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : 'text-light'}`}>
            Usuarios
        </NavLink>
    </li>


     


</>
    
  )
}
