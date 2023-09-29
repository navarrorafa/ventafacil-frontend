import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { dataFetch } from "../../helpers/dataFetch";


export const useDatosUser = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const { user } = useContext(UserContext);
    const { uidFireBase } = user;
    const url = `http://localhost:3000/api/v1/users/uid/${uidFireBase}`;


  


    const fetchData = async () => {
     
        setLoading(true);
   
            try {
         
                const res = await dataFetch(url, 'GET');
             
                const data = res.data;  
              
                setUserData(data);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        
        setLoading(false);
    };

    useEffect(() => {

        fetchData();

    }, []);
 
    return { userData, loading };
};
