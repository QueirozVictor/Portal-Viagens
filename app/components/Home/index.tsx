"use client";
import { Viagens } from "@/app/types/type";
import Link from "next/link";
import  styles  from './Home.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

type Destino = {
    inicio: Viagens[];
}

const Home = ({inicio} : Destino) =>{

    const chamado = inicio.slice(0,3);



    return(
        <section 
        className={styles.home_layout}>
            <Swiper 
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            >
                {chamado.slice(0,3).map((viagem) =>(
                    <SwiperSlide key={viagem.id}>

                        <Link 
                        key={viagem.id}
                        href={`/destinos/${viagem.slug}`}
                        className={styles.home_banner}
                        >  
                            <img 
                                className={styles.home_img}
                                src={viagem.imagem} 
                                alt="Imagem do destino"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <h2 
            className={styles.home_title}>
            Destinos Populares
            </h2>
        </section>
    )
}

export default Home;