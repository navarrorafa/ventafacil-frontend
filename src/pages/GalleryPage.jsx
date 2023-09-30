
import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { useResultado } from '../hooks/useResultado';
import { Buscador } from '../components/Buscador';



export const GalleryPage = () => {
  
  const { searchTerm: originalSearchTerm } = useContext(SearchContext);  
  
  const urlBusca = "http://localhost:3000/api/v1/ventafacil/ads/buscar"
  let key = "producto" 
  let searchTerm = originalSearchTerm; 
  

  const params = { [key]: searchTerm };  
  const { data, loading } = useResultado(urlBusca, params);

  return (
    <>
    <div>
     
       <Buscador route={"/galeria/"} />
    </div>
    <section>

    
      {loading ? 'Carregando dados...' : 
      <pre>{JSON.stringify(data, null, 2)}</pre>}

    </section>
    </>
  );
}

