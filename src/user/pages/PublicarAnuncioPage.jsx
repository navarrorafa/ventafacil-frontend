import { PublicarForm } from "../components/PublicarForm"
import { Outlet } from 'react-router-dom';

export const PublicarAnuncioPage = () => {
  return (
    <>
    <PublicarForm/>
    <Outlet />
    </>
  )
}
