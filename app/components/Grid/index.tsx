import { Viagens } from "@/app/types/type"
import Card from "../Card";
import Link from "next/link";
import styles from './Grid.module.css'

type Catalogo = {
    viagens: Viagens[];
}


const Grid = ({viagens} : Catalogo) => {
    return(
        <section className={styles.grid}>
        {viagens.map(viagem => <Link key={viagem.id} href={`/destinos/${viagem.slug}`}><Card  viagens={viagem}/> </Link> )}
        </section>

    )

    
}

export default Grid;