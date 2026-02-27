import { Component, inject, input } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
  styleUrl: './gif-list-item.css',
})
export class GifListItem {
  url = input.required<string>();
}
