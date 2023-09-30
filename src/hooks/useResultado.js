import { useEffect, useState } from "react";
import { dataFetch } from "../helpers/dataFetch";

export const  useResultado = (url, id , method) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const completeUrl = `${url}${id}`;  // Concatena a url com o id
      console.log(completeUrl, {id});
      const fetchData = async () => {
        setLoading(true);
        try {
          const fetchedData = await dataFetch(completeUrl, method);  // Usa a completeUrl aqui
          setData(fetchedData);
        } catch (error) {
          console.error('Fetch error:', error);
        }
        setLoading(false);
      };
  
      if (id) {
        fetchData();
      }
    }, [url, id]);
  
    return { data, loading };
  }
  