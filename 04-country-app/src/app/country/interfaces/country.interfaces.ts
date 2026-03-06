export interface Country {
    cca2: string;
    image: string;
    imageSvg: string;
    name: string;
    region: string;
    subRegion: string;
    capital: string;
    population: number;
    languages: Languages;
    currencies: Currencies;

}

export interface Languages {
    spa: string;
}

export interface Currencies {
    HNL: Hnl;
}

export interface Hnl {
    symbol: string;
    name:   string;
}