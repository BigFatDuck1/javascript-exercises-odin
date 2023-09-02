const reverseString = function(inputString) {

    let stringLength = inputString.length;

    //Convert into array
    let arrayString = inputString.split(""); //array of SINGLE CHARACTERS

    //Reverse
    let reversedString = "";

    for (i = 0; i < stringLength; i++) {
        let poppedCharacter = arrayString.pop();
        reversedString = reversedString + poppedCharacter;
    }; 

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
