import { useContext, useEffect, useState } from "react";

import { dataFetch } from "../../helpers/dataFetch";

export const useDatosAds = () => {
    const [adData, setAdData] = useState({});
    const [loading, setLoading] = useState(false);
    
    const url = `http://localhost:3000/api/v1/ventafacil/ads/anuncio/5`;


  


    const fetchData = async () => {
     
        setLoading(true);
   
            try {
         
                const res = await dataFetch(url, 'GET');
             
                const data = res.data;  
              console.log(data)
                setAdData(data);
            } catch (error) {
                console.error('Failed to fetch ad data:', error);
            }
        
        setLoading(false);
    };

    useEffect(() => {

        fetchData();

    }, []);
 
    return { adData, loading };
}
