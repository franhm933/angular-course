import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-by-country',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-country.html',
})
export class ByCountry {
  countryService = inject(CountryService);
  query = signal('');

  //Con observables
  countryResource = rxResource<Country[], { query: string }>({
    params: () => ({query: this.query()}),
    stream: ({params}) => this.countryService.searchByCountry(params.query)
  })  

  //Con promesas
  // countryResource = resource({
  //   params: () => ({query: this.query()}),
  //   loader: async ({params}) => {
  //     if(params.query === '' || !params.query) return [];

  //     return await firstValueFrom(
  //       this.countryService.searchByCountry(params.query)
  //     );
  //   }
  // })

}
