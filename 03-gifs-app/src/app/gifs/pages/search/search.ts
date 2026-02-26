import { Component, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';
import { GifMapper } from '../../mapper/gif.mapper';

@Component({
  selector: 'gifs-search',
  imports: [GifList],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export default class Search {

  gifsService = inject(GifsService);

  gifs = signal<Gif[]>([]);
  
  onSearch(query:string) {
    console.log('searching for', query);
    this.gifsService.loadSearchedGifs(query).subscribe( (response) => {
      this.gifs.set(response);
    });

  }
}
