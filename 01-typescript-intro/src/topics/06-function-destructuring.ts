export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}


// function taxCalculation(options: TaxCalculationOptions): [number, number] { // Solo desestructurado el tipo que se le pone al retorno de la función
//     let total = 0;

//     options.products.forEach( ({price}) => {
//         total += price;
//     })

//     return[total, total * options.tax]
// }

// function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] { //Desectructurado opción 1, no es la mejor por si tenemos muchos elementos
//     let total = 0;

//     products.forEach( ({price}) => {
//         total += price;
//     })

//     return[total, total * tax]
// }

export function taxCalculation(options: TaxCalculationOptions): [number, number] { //Desectructurado opción 2

    const { tax, products} = options;
    let total = 0;

    products.forEach( ({price}) => {
        total += price;
    })

    return[total, total * tax]
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax //Si se llama igual la variable puedes dejarlo solo una vez
});

console.log('Total', total);
console.log('Tax', taxTotal);
