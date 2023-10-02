import { Buscador } from "../components/Buscador"
import { CardAnuncio } from "../components/CardAnuncio.Jsx"
import { useFetch } from "../hooks/useFetch";





export const HomePage = () => {

  const url = "http://localhost:3000/api/v1/ventafacil/ads";
  const method = 'GET';
  const response =  useFetch(url, method);



  if (!response.ok || !response.data) {
    return <div>Error or Loading...</div>;
}

const {data} = response ;
console.log({data} )
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
