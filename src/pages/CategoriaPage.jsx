import { CardCategoria } from "../components/CardCategoria";
// import { dataFetch } from "../helpers/dataFetch";
import { useFetch } from "../hooks/useFetch";
// import { useResultado } from "../hooks/useResultado";
// import { useDatosCats } from "../user/hooks/useDatosCats";


export const CategoriaPage =  () => {

  const url = "http://localhost:3000/api/v1/ventafacil/categories";
  const method = 'GET';
  const response =  useFetch(url, method);



  if (!response.ok || !response.data) {
    return <div>Error or Loading...</div>;
}

const {data} = response ;
console.log({data} )
 

  return (
    <>

      <section  className='d-flex justify-content-between align-items-end'>
        {
          data.map((item) => (
            <CardCategoria
              key={item.id_categoria}
              {...item}
            />
          ))
        }
      </section>
    </>
  );


}
