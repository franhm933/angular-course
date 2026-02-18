import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPage } from './pages/counter/hero-page/hero-page';
import { Dragonball } from './pages/dragonball/dragonball';
import { DragonballSuper } from './pages/dragonball-super/dragonball-super';

export const routes: Routes = [
    {
        path: '',
        component: Counter
    },
    {
        path: 'hero',
        component: HeroPage
    },
    {
        path: 'dragonball',
        component: Dragonball
    },
    {
        path: 'dragonball-super',
        component: DragonballSuper
    },
    {
        path: '**',
        redirectTo: '',
    }
];
