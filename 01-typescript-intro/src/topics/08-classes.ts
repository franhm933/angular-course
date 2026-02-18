export class Person {
    //No es lo normal declarar aquí variables, se declaran en constructor en Typescript
    // public name: string;
    // private address: string;

    constructor(public name:string, private address: string = 'No Address')  {

    }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo : string,
//         public age: number, 
//         public realName: string
//     ) {
//        super(realName, 'NY');
//     }
// }

export class Hero {
    constructor(
        public alterEgo : string,
        public age: number, 
        public realName: string,
        public person: Person,
    ) {
        person = new Person(realName);
    }
}


const yoMismo = new Person('Fran', 'Granada');

const heroMan = new Hero('Fran', 32, 'Fran Herrera', yoMismo);

console.log({heroMan});