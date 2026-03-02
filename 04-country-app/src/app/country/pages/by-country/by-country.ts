import { Component } from '@angular/core';
import { CountrySearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-country',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-country.html',
})
export class ByCountry { }
