//a common pattern in JS is to execute a function as soon as it is declared
(function () {
    console.log("Chirp, chirp!");
  })();
  //this is an anonymous function expression that executes right aways, and outputs "Chirp Chirp"
  //the function has no name and is not stored in a variable
  //the two parentheses at the end of the function expression cause it to be immediately executed or invoked -- Immediately Invoked Function Expression
//example: rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expressions (IIFE)
function makeNest() {
    console.log("A cozy nest is ready");
  }
  
  makeNest();
(function () {
    console.log("A cozy nest is ready");
  }) ();
  
  makeNest();