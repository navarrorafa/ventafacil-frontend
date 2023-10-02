import { Buscador } from "../components/Buscador"





export const HomePage = () => {
  return (
    <>
      <h1 className="text-center text-light">Home</h1>
      <Buscador route={"/galeria/"} />
    </>
  )
}
