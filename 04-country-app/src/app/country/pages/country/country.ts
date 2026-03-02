import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-country',
  imports: [],
  templateUrl: './country.html',
})
export default class Country {
  code = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['code'])
    )
  );
}

