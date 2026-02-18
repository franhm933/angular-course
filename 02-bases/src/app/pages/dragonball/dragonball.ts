import { NgClass } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

interface Character {
  id: number, 
  name: string, 
  power: number,
}

@Component({
  selector: 'app-dragonball',
  // imports: [NgClass],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball {
  name = signal('');
  power = signal(0)


  characters = signal<Character[]>([
    {
      id: 1, 
      name: 'Goku',
      power: 9001
    },

  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  });

  addCharacter() {
    console.log('Adding character', this.name(), this.power());
    if(!this.name() || this.power() <= 0) {
      return
    }

    const newCharacter: Character = {
      id: Math.max(...this.characters().map(c => c.id)) + 1,
      name: this.name(),
      power: this.power(),
    }
    this.characters.update((v) => [...v, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0); 
  }
}
