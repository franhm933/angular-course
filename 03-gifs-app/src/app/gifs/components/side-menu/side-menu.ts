import { Component } from '@angular/core';
import { GifsSideMenuHeader } from "./side-menu-header/side-menu-header";
import { GifsSideMenuOptions } from './side-menu-options/side-menu-options';

@Component({
  selector: 'gifs-side-menu',
  imports: [GifsSideMenuHeader, GifsSideMenuOptions],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenu { }
