//
num = 2;
if (num > 10) {
    return "Bigger than 10";
  } else {
    return "10 or Less";
}
//example: convert into an if/else statement
function testElse(val) {
    var result = "";
    // Only change code below this line
    if (val > 5) {
      result = "Bigger than 5";
    }
    else {
      result = "5 or Smaller";
    }
    // Only change code above this line
    return result;
}
console.log(testElse(4));