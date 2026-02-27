import { AfterViewInit, Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { GifListItem } from "./gif-list-item/gif-list-item";
import { Gif } from '../../interfaces/gif.interface';
import { GifsService } from '../../services/gifs.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';

@Component({
  selector: 'gif-list',
  imports: [GifListItem],
  templateUrl: './gif-list.html',
  styleUrl: './gif-list.css',
})
export class GifList implements AfterViewInit {
  gifs = input.required<Gif[]>();
  gifService = inject(GifsService);
  scrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;
    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event: Event) {
      const scrollDiv = this.scrollDivRef()?.nativeElement;
      if (!scrollDiv) return;

      const scrollTop = scrollDiv.scrollTop;
      const scrollHeight = scrollDiv.scrollHeight; //Scroll máximo que se puede hacer
      const clientHeight = scrollDiv.clientHeight; //Scroll que lleva hecho el usuario

      const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight ; // Si el usuario está a 300px de final
      if (isAtBottom) {
          this.gifService.loadTrendingGifs();
      }

      this.scrollStateService.setScrollState(scrollTop);
  }
}
