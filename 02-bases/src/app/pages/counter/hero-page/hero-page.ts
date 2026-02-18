
import { UpperCasePipe } from "@angular/common";
import {Component, computed, signal} from "@angular/core"

@Component({
    templateUrl: './hero-page.html',
    imports: [UpperCasePipe],
})
export class HeroPage {
    name = signal('Ironman');
    age = signal(45);
    heroDescription = computed(() => {
        const description = `${ this.name() } - ${ this.age() }`;
        return description;
    })

    capitalizedName = computed(() => {
        const capName = this.name.toString().toUpperCase();
        return capName;
    })

    getHeroDescription() {
         return `${ this.name } - ${ this.age }`;
    }

    changeHero() {
        this.name.update((v) => 'Spiderman');
        this.age.update((v) => 22);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge() {
        this.age.update((v) => 60);
    }

    getNameMayus() {
        return this.name.toString().toUpperCase();
    }
}