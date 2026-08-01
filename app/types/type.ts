
export interface Viagens {
    id: number;
    title: string;
    imagem: string;
    value: string;
    slug: string;
    destaque: boolean;

    historia: string;

    pontosTuristicos: PontoTuristico[];

}

export type PontoTuristico = {
    image: string;
    name: string;
}