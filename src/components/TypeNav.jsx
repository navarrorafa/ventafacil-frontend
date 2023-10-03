import { useContext } from "react";
import { BottonLogout, NavAdmin, NavGuest, NavUser, } from "./index"
import { NavLink } from 'react-router-dom'
import { UserContext } from "../context/UserContext";
import Logo from "../assets/vf_logo_3.png"

export const TypeNav = () => {

  const { user, updateUser } = useContext(UserContext);
  const { rolFireBase } = user

  return (
    <>

      <div className="d-flex justify-content-between align-items-end">
        <nav className='navbar navbar-expand-sm navbar-light m-2'>
          
            <ul className='navbar-nav mb-2'>

              <li className='nav-item'>
                <NavLink
                  to='/'
                  className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : 'text-light'}`}>
                  Home
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  to='/categoria'
                  className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : 'text-light'}`}>
                  Categoria
                </NavLink>
              </li>
              {
                rolFireBase === 'user' ? (
                  <>
                    <NavUser />
                  </>
                ) : rolFireBase === 'admin' ? (
                  <>
                    <NavAdmin />
                  </>
                ) : (
                  <>
                    <NavGuest />
                  </>
                )
              }
            </ul>
          
        </nav>

        <div className="d-flex justify-content-between align-items-end">{
          rolFireBase &&
          <div className="">
            <BottonLogout />
          </div>
        }<img src={Logo} alt="logoVentaFacil" /></div>
      </div>
    </>


  )
}
