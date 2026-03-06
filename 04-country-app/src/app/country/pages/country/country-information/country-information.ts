import { Component, computed, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interfaces';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.html',
})
export class CountryInformation {
  country = input.required<Country>();
  languages = computed(() =>
    Object.entries(this.country()?.languages ?? {})
  );
  currencies = computed(() =>
    Object.entries(this.country()?.currencies ?? {})
  );

  currentYear = computed(() => {
    return new Date().getFullYear();
  })
}
