import Grid from "../components/Grid";
import { destinos } from "../lb/destinos";

export default function Catalogo(){
    return(
        <Grid viagens={destinos}/>
    )
}