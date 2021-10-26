//the less than operator < compares if the left number is less than the one in the right
//if that's the case, the function returns true
//again, the < operator changes the data type of the numbers compared
console.log(2 < 5); // true
console.log('3' < 7); // true
console.log(5 < 5); // false
console.log(3 < 2); // false
console.log('8' < 4); // false
//example: add the < operator in the indicated lines do that the return statements make sense
function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
    if (val< 55) {  // Change this line
      return "Under 55";
    }
    return "55 or Over";
}
console.log(testLessThan(10));