const convertToCelsius = function(temp) {

  let convertedTemp = 0;

  convertedTemp = (temp - 32) * 5/9;
  convertedTemp = convertedTemp.toFixed(1);

  return parseFloat(convertedTemp);

};

const convertToFahrenheit = function(temp) {

  let convertedTemp = 0;

  convertedTemp = (temp*9/5) + 32;
  convertedTemp = convertedTemp.toFixed(1);

  return parseFloat(convertedTemp);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
