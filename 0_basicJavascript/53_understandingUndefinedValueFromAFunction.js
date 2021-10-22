//a function can inclue a return statement but is not necessary
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
console.log(addSum(3)); //you gen an undefined
//create a function addFive without arguments -- it adds 5 to the sum variable, the result needs to be undefined
// Setup
var sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive() {
  sum = sum + 5;
}
// Only change code above this line
addThree();
addFive();