import { useEffect, useState, useRef } from "react";
import { dataFetch } from "../helpers/dataFetch";

export const useResultado = (url, params, method = "POST") => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const lastParamsSent = useRef(null); 
    
    const fetchData = async () => {
        setLoading(true);
        try {
            const fetchedData = await dataFetch(url, method, params);
            setData(fetchedData);
        } catch (error) {
            console.error('Fetch error:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
  
  
        if (params && JSON.stringify(params) !== JSON.stringify(lastParamsSent.current)) {
            fetchData();
            lastParamsSent.current = params; 
         
        }
    }, [url, params, method]);

    return { data, loading };
};
