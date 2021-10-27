//the || operator returns true if one of the operants on the left and wight are true
//is similar to use this
if (num > 10) {
    return "No";
}
if (num < 5) {
return "No";
}
return "Yes";
//as this
if (num > 10 || num < 5) {
    return "No";
}
return "Yes";
function testLogicalOr(val) {
    // Only change code below this line
    if (val < 10 || val > 20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
}
console.log(testLogicalOr(15));