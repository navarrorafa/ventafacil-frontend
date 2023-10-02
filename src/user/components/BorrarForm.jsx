import React from 'react'
import { dataFetch } from '../../helpers/dataFetch';
import { useForm } from "../../hooks/useForm";
import { useDatosAds } from '../hooks/useDatosAds';
import { useNavigate } from 'react-router-dom';

export const BorrarForm = () => {
  const { adData } = useDatosAds()
  const navigate = useNavigate()
  console.log(adData)
  const url = "http://localhost:3000/api/v1/ventafacil/ads/eliminar/36"
  const { handleChange, handleSubmit, handleFileChange, data, submited, file } = useForm()

  const onSubmit = (ev) => {

    ev.preventDefault()
    const newAd = data
    updateAd(newAd)
    navigate('/user/myhome')
  }

  const updateAd = async () => {

    const dataAnuncio = await dataFetch(url, "DELETE")
    console.log(dataAnuncio)
  }




  return (
    <>
      <h1 className="text-center text-dark">Borrar Anuncio</h1>
      <p>¿SEGURO QUE QUIERES ELIMINAR EL ANUNCIO PARA <strong>{adData.producto}</strong>?</p>
      <form className="form-control bg-dark p-2" encType='multipart/form-data' onSubmit={onSubmit} method="DELETE">


        <input className='btn btn-danger m-2' type="submit" value={"ELIMINAR ANUNCIO"} />
        <button className='btn btn-dark m-2'>NO, VOLVER ATRÁS</button>
      </form>
    </>
  );
}
