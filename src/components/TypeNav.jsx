import { BottonLogout, NavAdmin, NavGuest, NavUser, } from "./index"
import { NavLink } from 'react-router-dom'

export const TypeNav = () => {

  const typeUser = "guest";

  return (
    <>
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
    </>


  )
}
