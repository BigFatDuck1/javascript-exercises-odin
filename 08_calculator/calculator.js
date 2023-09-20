const add = function(...arg) {

  let result = 0;

  for (i of arg) {
    result += i;
  }

  return result;
	
};

const subtract = function(...arg) {
	
  let result = arg[0] + arg[0];

  for (i of arg) {
    result -= i;
  }

  return result;

};

const sum = function(arg) {

  let result = 0;

  for (i of arg) {
    result += i;
  }

  return result;
	
};

const multiply = function(arg) {

  let result = 1;

  for (i of arg) {
    result = result * i;
  }

  return result;

};

const power = function(a, b) {

  return a ** b;
	
};

const factorial = function(a) {

  let product = 1;
    
  for (let i = 1; i <= a; i++) {
      product = product * i;
  }

  return product;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
