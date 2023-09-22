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
    //Reverse the string
    let reversed_string = [];
    for (i = modified_string.length - 1; i >= 0; i--) {
        reversed_string.push(modified_string[i]);
    }
    //Compare both 
    if (reversed_string.toString() == modified_string.toString()) {
        return true;
    }
    else {
        return false;
    }

};

console.log(palindromes("123321"));

// Do not edit below this line
module.exports = palindromes;
