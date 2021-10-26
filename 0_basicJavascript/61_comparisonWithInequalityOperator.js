//the inequality operator != is the opposite from ==
console.log(1 != 2); // true
console.log(1 != "1"); // false
console.log(1 != '1'); // false
console.log(1 != true); // false
console.log(0 != false); // false
//example: add the inequality operator in the if statement, compare the value to 99
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));