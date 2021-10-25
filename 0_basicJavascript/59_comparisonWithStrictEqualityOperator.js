//comparison with strict equality operators is the counterpart of the equality operator
//=== vs ==, only accepts values that have the same value and data type
//3 ===  3 is true
//3 === '3' is false
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(10));
console.log(testStrict(7));