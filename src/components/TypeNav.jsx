import { useContext } from "react";
import { BottonLogout, NavAdmin, NavGuest, NavUser, } from "./index"
import { NavLink } from 'react-router-dom'
import { UserContext } from "../context/UserContext";

export const TypeNav = () => {

  const { user, updateUser } = useContext(UserContext);
  const { rolFireBase } = user

  return (
    <>
      <p className="text-success h1"><strong>v€ntaFácilApp</strong></p>
      <nav className='navbar navbar-expand-sm navbar-light bg-dark'>
        <div className="container d-flex ">
            <ul className='navbar-nav mb-2'>

              <li className='nav-item'>
                <NavLink
                  to='/'
                  className={({ isActive }) => `nav-link text-light  ${isActive ? 'active' : ''}`}>
                  Home
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  to='/categoria'
                  className={({ isActive }) => `nav-link text-light ${isActive ? 'active' : ''}`}>
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
          </div>
      </nav>
    </>


  )
}
