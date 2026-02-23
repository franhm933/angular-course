import { Component } from '@angular/core';
import { environment } from '@enviroments/environment';

@Component({
  selector: 'app-gifs-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.html',
  styleUrl: './side-menu-header.css',
})
export class GifsSideMenuHeader {
  envs = environment;
}
