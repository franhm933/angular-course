import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollStateService {
  trendingScrollState = signal(0);

  setScrollState(state: number) {
    this.trendingScrollState.set(state);
  }
}
