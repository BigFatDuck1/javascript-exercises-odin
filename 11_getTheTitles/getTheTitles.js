const getTheTitles = function(array) {

    let titles_array = [];

    array.forEach(element => {
        titles_array.push(element.title)
    });

    return titles_array;

};

//Test
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

console.log(getTheTitles(books));


// Do not edit below this line
module.exports = getTheTitles;
