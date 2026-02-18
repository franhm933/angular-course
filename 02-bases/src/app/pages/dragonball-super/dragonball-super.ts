import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import type { Character } from '../../interfaces/character.interface';
import { Dragonball } from '../dragonball/dragonball';
import { DragonballService } from '../../services/dragonball.service';


@Component({
  selector: 'app-dragonball-super',
  // imports: [NgClass],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css',
  imports: [CharacterList, CharacterAdd],
})
export class DragonballSuper {
  //Inyectar servicio de forma tradicional
  //constructor( public dragonBallService: DragonballService) { }
  public dragonBallService = inject(DragonballService);
}
