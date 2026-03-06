import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { map } from 'rxjs/internal/operators/map';
import { CountryMapper } from '../mapper/country.mapper';
import { catchError, delay, Observable, of, throwError } from 'rxjs';
import type { Country } from '../interfaces/country.interfaces';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);
  

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    if(!query || query.trim().length === 0) return of([]);
  
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map( (items) => CountryMapper.mapRestCountryItemsToCountryArray(items)),
      delay(2000),
      catchError(error => {
        // console.log('Error en la consulta HTTP', error);
        return throwError(() => new Error(`No se pudieron obtener capitales con el query: ${query}`)); // Retorna un error observable con un mensaje personalizado
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    if(!query || query.trim().length === 0) return of([]);
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
    .pipe(
      map( (items) => CountryMapper.mapRestCountryItemsToCountryArray(items)),
      delay(2000),
      catchError(error => {
        // console.log('Error en la consulta HTTP', error);
        // console.log(query.trim().length);
        if(query.trim().length <= 2) {
          return throwError(() => new Error(`La búsqueda debe tener al menos tres letras`)); // Retorna un error observable con un mensaje personalizado
        } else {
          return throwError(() => new Error(`No se pudieron obtener paises con el query: ${query}`)); // Retorna un error observable con un mensaje personalizado
        }     
      })
    );
  }
  
  searchCountryByCode(code: string): Observable<Country | undefined> {
    code = code.toLowerCase();
    if(!code) return of(undefined);
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
    .pipe(
      map( (items) => CountryMapper.mapRestCountryItemsToCountryArray(items)),
      map( countries => countries.at(0) ),
      catchError(error => {
        console.log('Error en la consulta HTTP', error);
        return throwError(() => new Error(`No se pudieron obtener paises con el código: ${code}`)); // Retorna un error observable con un mensaje personalizado
      })
    );
  }
}
