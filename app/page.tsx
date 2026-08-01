import Title from "./components/Title"
import {destinos} from "@/app/lb/destinos"
import Grid from "@/app/components/Grid";
import Principal from "./components/Home"

export default function Home() {

  const destinosDestaque = destinos.filter( destino => destino.destaque)

  return (
    <>
      <Title title={"Viagens em destaque"}/>
      <Principal inicio={destinos}/>
      <Grid viagens={destinosDestaque}/>
      
    </>
  );
}
