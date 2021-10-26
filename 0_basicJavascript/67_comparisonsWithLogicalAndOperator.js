//the && operator returns true if only both the operants on the left and wight are true
//is similar to use this
if (num > 5) {
    if (num < 10) {
      return "Yes";
    }
}
return "No";
//as this
if (num > 5 && num < 10) {
    return "Yes";
}
return "No";
//example: replace the two if statements using the && operator; both statements need to be <= 50 and >= 25
function testLogicalAnd(val) {
    // Only change code below this line
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    // Only change code above this line
    return "No";
}
console.log(testLogicalAnd(25));