//instead of generation a whole number between 0 and a given number, we can generate a random number within a given range
//to do this, a min and max number need to be defined
//Math.floor(Math.random() * (max - min +1)) + min;
//generate a randomRange function that takes a range and generates a whole random number within
function randomRange(myMin, myMax) {
    // Only change code below this line
    var result = 0;
      while (result === 0) {
        result = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
      }
      return result;
    // Only change code above this line
  }