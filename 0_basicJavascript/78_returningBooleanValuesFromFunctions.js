//sometimes, it is simple to just write a logical condition than using an if/ else if statement. for example, this
/*function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}*/
//can be replaced by:
/*function isEqual(a, b) {
  return a === b;
}*/
//example: replace the if/else statements
function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
  }
  
console.log(isLess(15, 15));