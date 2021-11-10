//the conditional operator or ternary operator, can be used as one inline if-else expression
function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater or equal";
    }
  }
//can be replaced by
function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
  }
//the syntax is a ? b : c
//a is the condition, b isthe code to run when the condition is true, c is the code to run when the condition is false
//conditional operator to check if the string is equal or not
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);