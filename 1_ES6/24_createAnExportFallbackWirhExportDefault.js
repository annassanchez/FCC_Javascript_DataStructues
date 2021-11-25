//there is another export syntax, called export default
//this syntax is usually used if only one valueis being exported from a file
export default function add(x, y) {
    return x + y;
  }//for a named function
  
  export default function(x, y) {
    return x + y;
  } //for an anonymous function
//example: the following function should be the fallback value for the module
export default function subtract(x, y) {
    return x - y;
  }