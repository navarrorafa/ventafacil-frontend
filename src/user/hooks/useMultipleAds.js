import React from 'react'
import { useContext, useEffect, useState } from "react";

import { dataFetch } from "../../helpers/dataFetch";


export const useMultipleAds = () => {

    const [multipleAdData, setmultipleAdData] = useState({});
    const [loading, setLoading] = useState(false);
    const url= `http://localhost:3000/api/v1/ventafacil/ads`;

    const fetchData = async () => {
     
        setLoading(true);
   
            try {
         
                const res = await dataFetch(url, 'GET');
             
                const data = res.data;  
              
              setmultipleAdData(data);
              console.log(data)
              
            } catch (error) {
                console.error('Failed to fetch ad data:', error);
            }
        
        setLoading(false);
    };

    useEffect(() => {

        fetchData();

    }, []);
  return {multipleAdData, loading}
}
