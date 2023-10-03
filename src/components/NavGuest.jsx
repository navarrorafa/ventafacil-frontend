import {NavLink} from 'react-router-dom'

export const NavGuest = () => {
  return (
    <>
    


      <li><strong>
        <NavLink 
          to="/auth/login" 
          className='nav-link text-primary'
        >
          Register & Login
        </NavLink>
      </strong></li>
    </>
  )
}
