
let factorial = (a) => {
    let product = 1;
    
    for (let i = 1; i <= a; i++) {
        product = product * i;
    }

    return product;
}

let result = factorial(10);

console.log(result);