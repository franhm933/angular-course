import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from "../../components/side-menu/side-menu";

@Component({
  selector: 'gifs-dashboard',
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export default class Dashboard {

}
