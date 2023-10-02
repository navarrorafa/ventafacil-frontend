import { fetchHelp } from "./fetchHelp"

const url= "http://localhost:3000/api/v1/ventafacil/ads"
export const capturarAnuncio = async () => {
    const { anuncios } = await fetchHelp(url);
    console.log(anuncios)
   

    console.log(url)
    
}
  

