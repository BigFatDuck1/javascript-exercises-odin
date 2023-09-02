const removeFromArray = function(...args) {

    let arrayGiven = args[0];
    let removeThis = args.slice(1, args.length)

    //let arrayLength = arrayGiven.length;

    for (i = 0; i < args.length - 1; i++) {

        let indexOfTarget = arrayGiven.indexOf(removeThis[i]);

        if (indexOfTarget != -1) {
            arrayGiven.splice(indexOfTarget, 1)
        }
    }

    return arrayGiven;


};

// Do not edit below this line
module.exports = removeFromArray;
