
export interface Passenger {
    name: string;
    children?: string[];
    
}

const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Paco',
    children: ['Natalia', 'Ester'],
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0; //Si no tiene length le pone 0

    console.log(passenger.name, howManyChildren);
}

printChildren(passenger2);