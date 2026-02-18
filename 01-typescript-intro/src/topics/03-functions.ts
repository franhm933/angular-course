
function addNumbers(a: number,b: number) {
    return a+b;
}

const addNumbersArrow = (a: number, b: number) => {
    return a+b;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base
}

// const result = addNumbers(1,2);
// const result2 = addNumbersArrow(1,2);
// const multiplyResult = multiply(5);

// console.log({result, result2, multiplyResult})

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount:number) => {
    character.hp+=amount;
}

const strider : Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 20);
healCharacter(strider, 10);

strider.showHp();

export {};