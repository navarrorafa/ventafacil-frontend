import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { logout } from "../auth/helpers"


export const BottonLogout = () => {
    const { updateUser, user } = useContext(UserContext)
    const { rolFireBase } = user

    return (
        <div className='navbar-botton'>
            <p className=''>{`Hola ${rolFireBase}`}</p>

            <button className='btn' onClick={()=>{logout(updateUser)}}>Log out</button>
        </div>
    )
}

