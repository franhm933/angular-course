let name = 'Fran';

name = '123'; //En tiempo de escritura TS detecta si se asina un tipo de valor diferente del original

let hpPoints: number | 'FULL' = 95;

hpPoints = 'FULL';

const isAlive: boolean = true;


console.log({
    name, hpPoints, isAlive
})

export {};