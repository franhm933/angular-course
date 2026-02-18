import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
  imports: [],
  styleUrl: './character-list.scss',
})
export class CharacterList {
listName = input.required<string>();
characters = input.required<Character[]>();
}
