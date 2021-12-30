//the some method works with arrays to check if any element passes a particular test
//it returns a boolean value -- true if any of the values meet the criteria, false if not
//for ecample, the following code would check if any element in the array less than 10:
const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
}); // returns true
//example: use the some inside the checkPositive function to check if any element in arr is positive
//the function should return a Boolean value
function checkPositive(arr) {
    // Only change code below this line
    return arr.some(val => val > 0);
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);