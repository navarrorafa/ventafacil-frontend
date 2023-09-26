import React from 'react';
import { useForm } from 'react-hook-form';
export const PublicarForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Producto" {...register("Producto", {required: true})} />
      <input type="text" placeholder="Descripcion" {...register("Descripcion", {required: true, maxLength: 150})} />
      <input type="text" placeholder="Precio" {...register("Precio", {required: true})} />
      <select {...register("Gategoria")}>
        <option value="electronica">electronica</option>
        <option value=" ropaAccesorios"> ropaAccesorios</option>
        <option value=" hogarJardin"> hogarJardin</option>
        <option value=" deportesAireLibre"> deportesAireLibre</option>
        <option value=" saludBelleza"> saludBelleza</option>
        <option value=" juguetesJuegos"> juguetesJuegos</option>
        <option value=" alimentosBebidas"> alimentosBebidas</option>
        <option value=" librosMusica"> librosMusica</option>
      </select>
      <input type="text" placeholder="Zona_Geografica" {...register("Zona_Geografica", {required: true, maxLength: 50})} />
      <input hidden type="text" placeholder="Id_vendedor" {...register("Id_vendedor", {required: true, maxLength: 150})} />
      <input hidden type="text" placeholder="Ruta_foto" {...register("Ruta_foto", {required: true})} />
      <input type="submit" />
    </form>
  );
}