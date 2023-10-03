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
    return <p className='alert alert-primary text-center'>Cargando...</p>;
}

const {data} = response ;
console.log({data} )
 

  return (
    <>

      <section  className=''>
      {
          <div className="row">
            {data.map((item) => (
              <div className="col-sm-6 col-md-4 mb-3 col-lg-3" key={item.id_categoria}>
                <CardCategoria {...item} />
              </div>
            ))}
          </div>
        
        }
      </section>
    </>
  );


}
