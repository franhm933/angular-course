import { Location } from '@angular/common';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'not-found',
  imports: [],
  templateUrl: './not-found.html',
})
export class NotFound {
  message = input<string>('No encontrado');
  location = inject(Location);

  goBack() {
    this.location.back();
  }
}
