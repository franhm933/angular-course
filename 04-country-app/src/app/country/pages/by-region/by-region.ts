import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { Region } from '../../interfaces/region.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';


function validateQueryParam(queryParam: string) {
  queryParam = queryParam.toLowerCase();
  const validRegions: Record<string, Region> = {
    'africa': 'Africa',
    'americas': 'Americas',
    'asia': 'Asia',
    'europe': 'Europe',
    'oceania': 'Oceania',
    'antarctic': 'Antarctic',
  };

  return validRegions[queryParam] ?? 'Americas';
}

@Component({
  selector: 'app-by-region',
  imports: [CountryList],
  templateUrl: './by-region.html',
})
export class ByRegion {
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);

  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('region') ?? '';
  
  selectedRegion = linkedSignal<Region>(() => validateQueryParam(this.queryParam));

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  setTableRegion(region: Region) {
    this.selectedRegion.set(region);
  }

  //Con observables
  countryResource = rxResource({
    params: () => ({region: this.selectedRegion()}),
    stream: ({params}) => {
      if(!params.region) return of([]);
      this.router.navigate(['/country/by-region'], {
        queryParams: {
          region: params.region
        }
      });
      return this.countryService.searchByRegion(params.region);
    }
  }) 
}
