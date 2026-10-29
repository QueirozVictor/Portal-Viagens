import Title from "./components/Title"
import { destinos } from "@/app/lb/destinos"
import Grid from "@/app/components/Grid";
import Principal from "./components/Home"

export default function Home() {
  const destinosDestaque = destinos.filter((destino) => destino.destaque)
  return (
    <>
      <Principal inicio={destinos} />
      <Title title="Destinos em destaque" />
      <Grid viagens={destinosDestaque} />
    </>
  );
}
