//the last challenge was a step closer to functional programming principles, but there is still something missing
//we didn't alter the global variable value, ut the function incrementer would not work without the global variable fixedValue being there
//another principles of functiojnal programming is to always declare your dependencies explicitly
//this means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument
//there are several good consequences from this principle
//the function is easier to test, you know exactly what input it takes and it won't depend on anything else in your program
//this can give yo more confidence when you alter, remove, or add new code
//you know waht you can or cannot change and you can see where the potential traps are
//finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it
//example: update the incrementer function to clearly declare its dependencies
//write the incrementer function so it takes an argument, and then returns a result after increasing the value by one
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(fixedValue) {
  let inc = fixedValue;
  return inc + 1
  // Only change code above this line
}