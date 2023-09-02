const repeatString = function(givenString, numberOfTimes) {

    if (numberOfTimes < 0) {
        return "ERROR"
    }
    else {
        return givenString.repeat(numberOfTimes);
    }

    

};

// Do not edit below this line
module.exports = repeatString;
