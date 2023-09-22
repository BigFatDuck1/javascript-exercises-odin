const findTheOldest = function(array) {

    let current_oldest = {};
    let current_oldest_age = 0;
    let current_year = 2023;

    //Go through each item and find the oldest
    array.forEach((element) => {

        //Calculte age of death
        let age = 0;
        if (("yearOfDeath" in element) == false) {
            age = current_year - element.yearOfBirth;
        }
        else {
            age = element.yearOfDeath - element.yearOfBirth;
        }
        //Compare with already iterated elements
        if (age > current_oldest_age) {
            current_oldest_age = age; //Overwrite pre-existing value
            current_oldest = element; //Set this object as the oldest individual
        }



    })


    return current_oldest;

};

//Test
const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
