import React from 'react'
import { CardAnuncio } from '../components/CardAnuncio.Jsx';
import { useFetch } from '../hooks/useFetch';

export const CategoriaUnicaPage = () => {
  const url = "http://localhost:3000/api/v1/ventafacil/categories";
  const method = 'GET';
  const response = useFetch(url, method);



  if (!response.ok || !response.data) {
    return <div>Error or Loading...</div>;
  }

  const { data } = response;
  console.log({ data })


  return (
    <>
      <h1 className='text-center text-light'>Categoría </h1>
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
    </>
  );
}
