//in order to create more flexible functions, ES6 introduces default parameters for functions
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // "Hello John"
console.log(greeting()); // "Hello Anonymous"
//example: modify the increment by adding a default parameter 1

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line