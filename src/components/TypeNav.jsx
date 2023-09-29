import { useContext } from "react";
import { BottonLogout, NavAdmin, NavGuest, NavUser, } from "./index"
import { NavLink } from 'react-router-dom'
import { UserContext } from "../context/UserContext";

export const TypeNav = () => {

  const { user } = useContext(UserContext);
   const {typeUser} = user
console.log({typeUser})
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
