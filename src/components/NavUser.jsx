import {NavLink} from 'react-router-dom'

export const NavUser = () => {
  return (
    <>
     
                <li>
                    <NavLink
                        to="/user/publicar"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Publicar Anuncio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/user/myhome"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Mi Espacio        
                    </NavLink>
                </li>
  

    </>
  )
}
