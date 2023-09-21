const palindromes = function (str) {

    //Array of all letters in alphabet, and all numbers
    let all_letters = "qwertyuiopasdfghjklzxcvbnm".split("");
    let all_numbers ="1234567890".split("");
    //To lowercase
    str = str.toLowerCase();
    //Remove space and punctuation
    let modified_string = str;
    modified_string = modified_string.split("");
    modified_string = modified_string.filter((item) => {
        if (all_letters.includes(item) || all_numbers.includes(item)) {
            return item;
        }
    })

    return modified_string;

};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
