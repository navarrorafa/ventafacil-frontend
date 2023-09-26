import {NavLink} from 'react-router-dom'

export const NavGuest = () => {
  return (
    <>
    


      <li>
        <NavLink 
          to="/auth/login" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/auth/register" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Register
        </NavLink>
      </li>

    </>
  )
}
