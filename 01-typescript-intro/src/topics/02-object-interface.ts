
let skills: string[] = ['Bash', 'Counter', 'Healing']; //Limitamos a string los valores del array

//Una constante es mas liviana que un let


//Como tipar un objeto (usar una interface)

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //? es para decirle que es opcional
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: ""
}

strider.hometown = 'Rivendell';

console.table(strider);

export {};