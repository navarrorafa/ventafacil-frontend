import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { logout } from "../auth/helpers"


export const BottonLogout = () => {
    const { updateUser, user } = useContext(UserContext)
    const { rolFireBase } = user

    return (
        <>

            <button className='btn text-success bg-transparent border-success' onClick={()=>{logout(updateUser)}}>Log out {rolFireBase}</button>
        </>
    )
}

