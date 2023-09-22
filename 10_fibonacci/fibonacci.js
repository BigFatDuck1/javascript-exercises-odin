const fibonacci = function(nth_number) {

    //Check for negatives
    if (nth_number <= 0) {
        return "OOPS";
    }

    //Generate sequence up to nth_number
    let fibonacci = [];

    for (i = 0; i < nth_number; i++) {
        if (i == 0 || i == 1) {
            fibonacci.push(1)
            continue
        }
        else {
            let next_number = fibonacci[i - 2] + fibonacci[i - 1];
            fibonacci.push(next_number);
        }
    }

    //Return nth_number
    console.log(fibonacci);
    return fibonacci[nth_number - 1];

};

console.log(fibonacci(5));

// Do not edit below this line
module.exports = fibonacci;
