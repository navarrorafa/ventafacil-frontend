import React from 'react'
import { dataFetch } from '../../helpers/dataFetch';
import { useForm } from "../../hooks/useForm";
import { useDatosAds } from '../hooks/useDatosAds';

export const BorrarForm = () => {
    const { adData } = useDatosAds()

    console.log(adData)
        const url = "http://localhost:3000/api/v1/ventafacil/ads/eliminar/36"
        const { handleChange, handleSubmit, handleFileChange, data, submited, file } = useForm()
      
        const onSubmit = (ev) => {
      
        ev.preventDefault()
         const newAd = data
        updateAd(newAd)
      
         }
      
        const updateAd = async () => {
          
          const dataAnuncio = await dataFetch(url, "DELETE")
          console.log(dataAnuncio)
        }
      
       
      
      
        return (
          <>
            <p>¿SEGURO QUE QUIERES ELIMINAR EL ANUNCIO PARA <strong>{adData.producto}</strong>?</p>
            <form encType='multipart/form-data' onSubmit={onSubmit} method="DELETE">
              
      
              <input type="submit" value={"ELIMINAR ANUNCIO"} />
              <button>NO, VOLVER ATRÁS</button>
            </form>
          </>
        );
}
