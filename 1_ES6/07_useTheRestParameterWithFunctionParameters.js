//in order to create more flexible solution, es6 introduces the rest parameter
//with this parameter you can create functions that take a variable number of arguments
//those arguments are stored in an array that will later be used
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2)); // "You have passed 3 arguments."
  console.log(howMany("string", null, [1, 2, 3], { })); // "You have passed 4 arguments."
//the rest parameter eliminates the need to check the args array
//allows us to apply map(), filter() and reduce() on the parameters array
//example: modify the function sum so that it can take any number of parameters
const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }
//solution
const sum = (...args) => args.reduce((a, b) => a + b, 0);