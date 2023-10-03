import {NavLink} from 'react-router-dom'

export const NavUser = () => {
  return (
    <>
     
                <li>
                    <NavLink
                        to="/user/publicar"
                        className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : 'text-light'}`}>
                        Publicar Anuncio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    
                        to="/user/misanuncios"
                        className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : 'text-light'}`}>
                        Mis anuncios
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/user/myhome"
                        className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : 'text-light'}`}>
                        Mi Espacio        
                    </NavLink>
                </li>
  

    </>
  )
}
