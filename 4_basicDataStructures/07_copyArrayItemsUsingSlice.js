//slice() is a method that rather than modifying an array, copies or extracts a given number of elements to a new array, leaving the array it is called on untouched
//slice() takes only two parameters -- the first index that begin the extraction and the second index that ends the extraction
//consider this:
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3); // results ['snow', 'sleet']
//example: given a function, modify it using slice to extract the information from the argument and return a new array containing the string elements 'warm' and 'sunny'
function forecast(arr) {
    // Only change code below this line
    let Weather = arr.slice(2, 4);
    return Weather
  }
  
  // Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));