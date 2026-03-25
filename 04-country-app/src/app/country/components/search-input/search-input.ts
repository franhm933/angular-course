import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class CountrySearchInput {
  value = output<string>();
  placeholder = input<string>('Buscar');
  initialValue = input<string>('');

  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

  debounceEffect = effect((onCleanUp) => {
    const value = this.inputValue();
    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, 500)

    onCleanUp(() => {
      clearTimeout(timeout);
    })
  })
}
