const leapYears = function(year) {

    //Check for corrrect input type
    if (typeof(year) != "number") {
        return "ERROR";
    };

    //Divisible by four
    //Divisible by four hundred
    //Divisible by one hundred not leap year

    if (year % 4 != 0) {
        return false;
    }
    if (year % 4 == 0) {
        if (year % 100 != 0) {
            return true;
        }
        else if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
    };

};

// Do not edit below this line
module.exports = leapYears;
