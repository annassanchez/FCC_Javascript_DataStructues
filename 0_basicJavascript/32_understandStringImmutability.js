//strings are immutable, so the slices cannot be reassigned:
var myStr = "Bob";
myStr[0] = "J";
//in order to change the value of the string, you need to assign the variable to a new string
var myStr = "Bob";
myStr = "Job";
//example
// Setup
var myStr = "Jello World";
// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line