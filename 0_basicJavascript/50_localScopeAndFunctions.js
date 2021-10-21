//for declare local variables, you use var inside the function
function myTest() {
	var loc = "foo";
	console.log(loc);
}
myTest();
console.log(loc);
//example
function myLocalScope() {
    // Only change code below this line
    var myVar = "foo";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);