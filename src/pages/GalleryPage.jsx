import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { CardAnuncio } from "./CardAnuncio";
import { Buscador } from "../components/Buscador";
import { useResultado } from "../hooks/useResultado";





export const GalleryPage = () => {
  
  const { searchTerm: originalSearchTerm } = useContext(SearchContext);  
  
  const urlBusca = "http://localhost:3000/api/v1/ventafacil/ads/buscar"
  let key = "producto" 
  let searchTerm = originalSearchTerm; 
  

  const params = { [key]: searchTerm };  
  const { data , loading } = useResultado(urlBusca, params);

  
  return (
    <>
    <div>
       <Buscador route={"/galeria/"} />
    </div>
    <section>
      {loading ? 'Carregando dados...' : 
        data.data.map((item, index) => (
        <CardAnuncio
            key={index}
            {...item}
          />
        ))
      }
    </section>
    </>
  );
}