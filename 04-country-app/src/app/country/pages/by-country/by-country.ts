import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { CountrySearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { Country } from '../../interfaces/country.interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-country',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-country.html',
})
export class ByCountry {
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);

  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  
  query = linkedSignal(() => this.queryParam);

  //Con observables
  countryResource = rxResource<Country[], { query: string }>({
    params: () => ({query: this.query()}),
    stream: ({params}) => {
      if(!params.query) return of([]);
      this.router.navigate(['/country/by-country'], {
        queryParams: {
          query: params.query
        }
      });
      return this.countryService.searchByCountry(params.query);
    }
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
