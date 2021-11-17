//like a regular function, you can pass arguments into an arrow function
const doubler = (item) => item * 2;
doubler(4); // returns 8
//no need for parentheses when you have only a parameter
const doubler = item => item * 2;
//you can pass multiple arguments to a function
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
//original function
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));
//example: write an arrow function with parameters
const myConcat  = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));