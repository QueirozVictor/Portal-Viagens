import { Viagens } from "@/app/types/type"
import styles from  './Card.module.css'

type Viagem = {
    viagens: Viagens;
}

const Card = ({viagens} : Viagem) => {
    const {id, title, imagem, slug} = viagens;

    return(
        <div 
        className={styles.card}
        key={id}>
            <img 
            className={styles.card_imagem}
            src={imagem} 
            alt={`Imagem do Destino ${title}`} />

            <div className={styles.card_description}>
                <h3 className={styles.card_title}>{title}</h3>

                <span className={styles.card_call}>Conhecer</span>
            </div>
        </div>
    )
}

export default Card;