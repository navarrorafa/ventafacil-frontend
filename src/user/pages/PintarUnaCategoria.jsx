
import { useParams,  } from 'react-router-dom';

import { CardAnuncio } from '../../pages/CardAnuncio.jsx';
import { useFetch } from '../../hooks/useFetch';



export const PintarUnaCategoria = () => {
    const { nombre } = useParams();
    const url = `http://localhost:3000/api/v1/ventafacil/ads/categoriaparam/${nombre}`

    const response = useFetch(url, "GET")
    const { data } = response
    console.log(response)
    console.log({ data })

   

    if (!response.ok || !response.data) {
        return <div> Loading...</div>;
    }

    return (

      
        <section>
            
            {


                data.map((item) => (
                    <CardAnuncio
                        key={item.id_categoria}
                        {...item}
                    />
                ))
            }
        </section>
    )
}


