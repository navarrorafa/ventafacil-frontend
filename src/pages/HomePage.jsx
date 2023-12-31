import { Buscador } from "../components/Buscador"
import { useFetch } from "../hooks/useFetch";
import { CardAnuncio } from "./CardAnuncio";





export const HomePage = () => {

  const url = "http://localhost:3000/api/v1/ventafacil/ads";
  const method = 'GET';
  const response = useFetch(url, method);



  if (!response.ok || !response.data) {
    return <p className='alert alert-primary text-center'>Cargando...</p>;
  }

  const { data } = response;
  // // console.log({data} 
  return (

    <><section>
      {data.map((item) => (
        <CardAnuncio
          key={item.id_categoria}
          {...item} />
      ))}
    </section><>
        <h1 className="text-center text-light">Home</h1>
        <Buscador route={"/galeria/"} />
      </></>

  )
}
