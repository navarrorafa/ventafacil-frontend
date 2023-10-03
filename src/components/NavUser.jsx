import {NavLink} from 'react-router-dom'

export const NavUser = () => {
  return (
    <>
     
                <li>
                    <NavLink
                        to="/user/publicar"
                        className={({ isActive }) => `nav-link text-light ${isActive ? 'active' : ''}`}>
                        Publicar Anuncio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    
                        to="/user/misanuncios"
                        className={({ isActive }) => `nav-link text-light ${isActive ? 'active' : ''}`}>
                        Mis anuncios
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/user/myhome"
                        className={({ isActive }) => `nav-link text-light active ${isActive ? 'active' : ''}`}>
                        Mi Espacio        
                    </NavLink>
                </li>
  

    </>
  )
}
