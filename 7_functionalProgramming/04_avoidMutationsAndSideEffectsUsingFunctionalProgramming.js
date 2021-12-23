//if you haven't already figured it out, the issue in the revious challenge with the splice call in the tabColse() function
//unfortunately splice changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results
//this is a small example of a much larger pattern -- you call a function on a variable, array, ot an object, and the function changes the variable or something in the object
//one of the core principles of functional programming is to not change things
//changes lead to bugs -- it's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable
//the previous example didn't have any complicated operations but the splice method changed the original array and resulted in a bug
//recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect
//a function, ideally, should be a pure function, meaning that iit does not cause any side effects
//let's try to master this discipline and not alter any variable or object in our code
//example: fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  return fixedValue+1;
  // Only change code above this line
}