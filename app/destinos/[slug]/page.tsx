import { notFound } from "next/navigation";
import { destinos } from '@/app/lb/destinos'
import styles from '@/app/destinos/[slug]/slug.module.css'

type Parametros = {
    params: Promise<{
        slug: string;
    }>
}

export function generateStaticParams() {
    return destinos.map((destino) => ({
        slug: destino.slug,
    }));
}

export default async function Destino ({ params } : Parametros ) {

    const { slug } = await params;

    const destino = destinos.find((v) => v.slug === slug);

    if(!destino) notFound();


    return(
        <section  key={destino.id}>
            <div className={styles.response}>
                <img
                className={styles.img}
                src={destino.imagem}
                alt="Imagem não encontrada"
                />
                <div className={styles.layout}>
                    <h3 className={styles.layout__title}>
                        {destino.title}
                    </h3>
                    <article className={styles.layout__history}>
                        <h2 className={styles.history_title}>História:</h2>
                        <p className={styles.history_description}>
                            {destino.historia}
                        </p>
                    </article>
                </div>
            </div>
                <h2 className={styles.layout_turistic_title}>Pontos Turistícos</h2>

                        <div className={styles.turistic_card}>
                            
                            {destino.pontosTuristicos.map(ponto => (
                                    <div
                                    key={ponto.image} 
                                    className={styles.turistic_card_layout}>
                                        <img 
                                        className={styles.turistic_image}
                                        src={ponto.image} alt="Imagem não encontrada" />
                                        <p
                                        className={styles.turistic_description}
                                        >
                                            {ponto.name}
                                        </p>
                                    </div>
                            ))}
                        </div>
                
                <p className={styles.layout_price}>A partir de  <span>{destino.value}</span></p>
        </section>
    )
}