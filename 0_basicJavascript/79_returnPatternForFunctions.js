//when a return statement is reach, the execution of the current function stops
function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
  }
  myFun();
//example: modify abTest so that id a or b < 0 returns undefined
// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
      return undefined;
    }
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
console.log(abTest(2,2));