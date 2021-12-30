//the every mehtod works with arrays to check if every element passe a particular test
//it returns a boolean value -- true if all values meet the criteria, false if not
//for example, the following code would check if every number in the array is less than 10
const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
}); // returns false
//example: use the every method inside the checkPositive function to check every lement in arr is positive
//the function should return a boolean value
function checkPositive(arr) {
    // Only change code below this line
    return arr.every(val => val > 0);
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);