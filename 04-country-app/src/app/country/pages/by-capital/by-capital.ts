import { Component } from '@angular/core';
import { CountrySearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-capital',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-capital.html',
})
export class ByCapital {
  
}
