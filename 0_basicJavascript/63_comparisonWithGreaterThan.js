//the greater than operator > compares if the number on the left is greater than the number of the right
//if so, it returns truen; otherwise returns false
console.log(5 > 3); // true
console.log(7 > '3'); // true
console.log(2 > 3); // false
console.log('1' > 9); // false
//example: add the > operator in the indicated lines so that the return statmenets make sense
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
    if (val > 10) {  // Change this line
      return "Over 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(10));