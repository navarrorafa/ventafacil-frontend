import { CardCategoria } from "../components/CardCategoria";
import { dataFetch } from "../helpers/dataFetch";
import { useResultado } from "../hooks/useResultado";
import { useDatosCats } from "../user/hooks/useDatosCats";


export const CategoriaPage = async () => {
 
  
  const url = "http://localhost:3000/api/v1/ventafacil/categories"
   
  

   
  const data = await dataFetch(url, "GET");
console.log(data)
  
  return (
    <>
   
    <section>
    {
        data.map((item, index) => (
        <CardCategoria
            key={index}
            {...item}
          />
        ))
      }
    </section>
    </>
  );

  
}
