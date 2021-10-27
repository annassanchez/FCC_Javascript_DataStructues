//order is important in if, else if statements
//for examples, let's loof at this two functions:
function foo(x) {
	if (x < 1) {
		return "Less than one";
	} else if (x < 2) {
		return "Lesss than two";
	} else {
		return "Greater or equal to two";
	}
}
//and
function bar(x) {
    if (x < 2) {
      return "Less than two";
    } else if (x < 1) {
      return "Less than one";
    } else {
      return "Greater than or equal to two";
    }
  }
//because of the order, foo (0) returns "Less than one" and bar(0) returns "less than one"
//example: change the order logic of teh function
//starting function
function orderMyLogic(val) {
    if (val < 10) {
      return "Less than 10";
    } else if (val < 5) {
      return "Less than 5";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);
//changed function
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);