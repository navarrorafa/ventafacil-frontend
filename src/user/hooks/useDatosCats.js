import { useContext, useEffect, useState } from "react";

import { dataFetch } from "../../helpers/dataFetch";

export const useDatosCats = () => {
    const [multipleCatsData, setmultipleCatsData] = useState({});
    const [loading, setLoading] = useState(false);
    const url= `http://localhost:3000/api/v1/ventafacil/categories`;

    const fetchData = async () => {
     
        setLoading(true);
   
            try {
         
                const res = await dataFetch(url, 'GET');
             
                const data = res.data;  
              
                setmultipleCatsData([data]);
              console.log(data)
              
            } catch (error) {
                console.error('Failed to fetch ad data:', error);
            }
        
        setLoading(false);
    };

    useEffect(() => {

        fetchData();

    }, []);
  return {multipleCatsData, loading}
}
