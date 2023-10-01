import { useContext } from "react";
import { BottonLogout, NavAdmin, NavGuest, NavUser, } from "./index"
import { NavLink } from 'react-router-dom'
import { UserContext } from "../context/UserContext";

export const TypeNav = () => {

  const { user, updateUser } = useContext(UserContext);
   const {rolFireBase} = user

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
              rolFireBase === 'user' ? (
                <>
                  <NavUser />
                  <BottonLogout />
                </>
              ) : rolFireBase === 'admin' ? (
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
