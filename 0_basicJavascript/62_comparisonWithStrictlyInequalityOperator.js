//the strictly inequality operator !== is the opposite from ===
//the stirctly inequality operator will not convert data types
console.log(3 !== 3); //false
console.log( 3 !== '3'); //true
console.log(3 !== 4); //true
//example: add the strict inequality operator to the if condition and compare if val is equal or not to 17
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));