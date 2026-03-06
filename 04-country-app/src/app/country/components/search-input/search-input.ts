import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class CountrySearchInput {
  value = output<string>();
  placeholder = input<string>('Buscar');
  onSearch(input:string) {
    this.value.emit(input);
  }
}
