//the less than operator <= compares if the left number is less than the one in the right
//if that's the case, the function returns true
//again, the <= operator changes the data type of the numbers compared
console.log(4 <= 5); // true
console.log('7' <= 7); // true
console.log(5 <= 5); // true
console.log(3 <= 2); // false
console.log('8' <= 4); // false
//example: add the <= to the indicated lines so that the return statements make sense
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
console.log(testLessOrEqual(10));