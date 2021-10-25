//comparison operators can also be used as conditions for if statement
//watch out the equality operator is not the same as the asignment operator
function equalityTest(myVal) {
    if (myVal == 10) {
       return "Equal";
    }
    return "Not Equal";
}
console.log(equalityTest(12));
console.log(equalityTest(10));
//example: use the equality value to see if the string to see if a value is equal to 12
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));