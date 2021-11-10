//also multiple conditional operators can be chained together for multiple conditions
//here's an if, else if and else statements
function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }
//here's the same function but with multiple conditional operators
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }
//here's even a more condensed solution
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
  }
//checkSign: evaluate if a number is zero, positive or negative
function checkSign(num) {
    return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
  }
  
  checkSign(10);