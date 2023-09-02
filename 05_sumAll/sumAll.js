const sumAll = function(int1, int2) {

    //Initial checks
    if (int1 < 0 || int2 < 0) {
        return "ERROR"
    }
    if (typeof(int1) != "number" || typeof(int2) != "number") {
        return "ERROR"
    }

    //Define a sum function
    const sumArray = (arrayGiven) => {
        let resultOfSum = 0;
        for (i = 0; i < arrayGiven.length; i++) {
            resultOfSum += arrayGiven[i];
        }

        return resultOfSum;
    };

    //Fill an array with all the intergers from smallerInt to biggerInt
    //Assign which one is smaller which one is bigger
    let biggerInt = 0;
    let smallerInt = 0;
    if (int1 > int2) {
        biggerInt = int1;
        smallerInt = int2;
    }
    else if (int2 > int1) {
        biggerInt = int2;
        smallerInt = int1;
    };

    //While loop to append array
    arrayOfAll = [];
    counterInt = smallerInt;

    while (counterInt <= biggerInt) {
        arrayOfAll.push(counterInt);
        counterInt += 1;
    }

    //Call sum function
    let finalSum = sumArray(arrayOfAll);

    //return
    return finalSum;


};

// Do not edit below this line
module.exports = sumAll;
