import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { logout } from "../auth/helpers"


export const BottonLogout = () => {
    const { updateUser, user } = useContext(UserContext)
    const { rolFireBase } = user

    return (
        <>

            <button className='btn text-primary bg-dark border-primary m-2' onClick={()=>{logout(updateUser)}}>Log out {rolFireBase}</button>
        </>
    )
}

