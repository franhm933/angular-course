import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@enviroments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';


const GIF_KEY = 'searchHistory';
const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifsParsed = JSON.parse(gifsFromLocalStorage);
  return gifsParsed;
}

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);
  private trendingPage = signal(0);

  //Para hacer el masonry, es necesario hacer algo del tipo [[gif, gif, gif], [gif, gif, gif], [gif, gif, gif]]
  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    console.log(this.trendingGifs().length);
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }

    return groups;
  });

  //Para cargar más gifs al hacer scroll

  searchedGifs = signal<Gif[]>([]);
  searchedGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  searchHistoryLocalStorage = signal<Record<string, Gif[]>>({});

  constructor() { 
    this.loadTrendingGifs();
    console.log('Search history keys', this.searchHistoryKeys());
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString); 
  });

  loadTrendingGifs() {
    //Solo permitimos un loading simultaneo, si ya se están cargando los gifs, no hacemos nada
    if(this.trendingGifsLoading()) return;

    // En caso de no haber un loading, seteamos a true el loading y hacemos la petición
    this.trendingGifsLoading.set(true);

    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: '25',
        offset: this.trendingPage() * 25,
      }
    }).subscribe( (response) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
      console.log(this.trendingGifs());
      this.trendingGifs.update(currentGifs => [...currentGifs, ...gifs]);
      console.log(this.trendingGifs());
      // this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      this.trendingPage.update(currentPage => currentPage + 1);
    });
  }

  loadSearchedGifs(query: string) {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: '25',
        q: query,
      }
    })
    .pipe(
      map( ({data}) => data),
      map( (items) => GifMapper.mapGiphyItemsToGifArray(items)),

      // Historial
      tap(items => {
        this.searchHistory.update( (history) => ({
          ...history,
          [query.toLowerCase()]: items,
        }));
        this.localStorageSaveAndFormat('searchHistory', this.searchHistory());
        console.log('Keys:', this.searchHistoryKeys());
      })
    );
    // .subscribe( (response) => {
    //   const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
    //   this.searchedGifs.set(gifs);
    //   this.searchedGifsLoading.set(false);
    // });
  }

  getHistoryGifs(query: string): Gif [] {
    return this.searchHistory()[query] ?? [];
  }

  localStorageSaveAndFormat(key:string, value: Record<string, Gif[]>) {
    let valueJson = JSON.stringify(value);
    console.log('Saving to localStorage:', valueJson);
    localStorage.setItem(key, valueJson);
  }
}
