//the arity of a function is the number of arguments it requires
//currying a function means to convert a function of N arity into N functions of arity 1
//In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on
function unCurried(x, y) {
    return x + y;
  }
  
  function curried(x) {
    return function(y) {
      return x + y;
    }
  }
  
 // const curried = x => y => x + y
  
  console.log(curried(1)(2)) //returns 3
//this is useful in your program if you can't supply all the arguments to a function at one time
//you can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available
const funcForY = curried(1);
console.log(funcForY(2)); // 3
//similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments
function impartial(x, y, z) {
    return x + y + z;
  }
  
  const partialFn = impartial.bind(this, 1, 2);
  console.log(partialFn(10)); // 13
//example: fill in the body of the add function so it uses currying to add paramenters x, y and z
function add(x) {
    // Only change code below this line
    return function(y) {
      return function(z) {
        return x + y + z;
      }
    }
    // Only change code above this line
  }
  
  add(10)(20)(30);