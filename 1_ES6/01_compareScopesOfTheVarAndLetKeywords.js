//a variable declared with the var keyword is declared globally, or locally if it is declared inside a function
//the let keyword behaves similarly -- also if you declared a let varaible within a block, statment or expression, the scope is limited to that block,...
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // [ 0, 1, 2 ]
console.log(i); // 3
//with the var variable, i is declared globally 
//when i++ is executed, it updates the global variable
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // [ 0, 1, 2 ]
console.log(i); // 3
//this behaviour will cause problems when creating another for loop that uses the i varaible
//the stored function will always refer to the value of the updated global i variable
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // 3
//printNumTwo prints 3 instead of 2
//the value assigned to i was updated and the printNumTwo() returns the global i and not the value had when the function was created in the for loop
//let does not follow this behaviour
//let printNumTwo; //this throws an error
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
//fix the given code -- i needs to be different inside and outside the given for loop
function checkScope() {
    var i = 'function scope';
    if (true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }