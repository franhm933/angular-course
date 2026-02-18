import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
  styleUrl: './character-add.scss',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);

  listName = input.required<string>();

  newCharacter = output<Character>();

  addCharacter() {
    console.log('Adding character', this.name(), this.power());
    if(!this.name() || this.power() <= 0) {
      return
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 10000), // Generar un ID aleatorio
      name: this.name(),
      power: this.power(),
    }
    //this.characters.update((v) => [...v, newCharacter]);
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0); 
  }
}
