import Title from "../components/Title";
import Grid from "../components/Grid";
import { destinos } from "../lb/destinos";

export default function Catalogo() {
    return (
        <>
            <Title title="Todos os destinos" />
            <p className="mx-auto mb-5 mt-2 w-[min(100%-2rem,1180px)] text-sm leading-6 text-slate-600 sm:text-base">
                Encontre inspiração para sua próxima viagem e conheça cada lugar.
            </p>
            <Grid viagens={destinos} />
        </>
    )
}
