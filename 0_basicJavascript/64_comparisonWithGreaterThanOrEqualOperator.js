//the greater than or equal operator >= compares if the number of the left is greater than or equal the number of the right
//if so, it returns true
//this operator will convert data types while comparing
console.log(6 >= 6); // true
console.log(7 >= '3'); // true
console.log(2 >= 3); // false
console.log('7' >= 9); // false
//example: add the >= operator on the indicated lines so that the return statement makes sense
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterOrEqual(10));