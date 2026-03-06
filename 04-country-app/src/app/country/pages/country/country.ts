import { Component, inject, resource } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interfaces';
import { NotFound } from "../../../shared/components/not-found/not-found";
import { CountryInformation } from './country-information/country-information';

@Component({
  selector: 'app-country',
  imports: [NotFound, CountryInformation],
  templateUrl: './country.html',
})
export default class CountryPage {
  code = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = rxResource<Country | undefined, { code: string }>({
    params: () => ({code: this.code}),
    stream: ({params}) => this.countryService.searchCountryByCode(params.code)
  })  

}

