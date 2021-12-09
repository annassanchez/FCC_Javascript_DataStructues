//when a function or method does not take arguments, you may forget to include the (empty) opening and clising parentheses
//often times the result of a function call is saved in a variable for other use in your code
//this error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function
function myFunction() {
	return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
//example: fix the code so the variable result is set to the value returned from the function
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine();
  console.log(result);