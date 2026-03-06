import { RESTCountry } from "../interfaces/rest-countries.interfaces";
import { Country } from "../interfaces/country.interfaces";

export class CountryMapper {
    static mapRestCountryToCountry(item: RESTCountry): Country {
        return {
            cca2: item.cca2.toLowerCase(),
            image: item.flags.png,
            imageSvg: item.flags.svg,
            name: item.translations["spa"].common ?? 'No Spanish Name',
            region: item.region,
            subRegion: item.subregion,
            capital: item.capital[0],
            population: item.population,
            languages: item.languages,
            currencies: item.currencies,
        }
    }

    static mapRestCountryItemsToCountryArray(items: RESTCountry[]): Country[] {
        return items.map(this.mapRestCountryToCountry);
    }

 }