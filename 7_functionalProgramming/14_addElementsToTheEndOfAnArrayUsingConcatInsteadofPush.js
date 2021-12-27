//functional programming is all about creating and using non-mutating functions
//the last challege introduced the concat method as a way to combine arrays into a new one without mutating the original array
//compare concat to the push method
//push adds an item to the end of the same array it is called on, which mutates that array
const arr = [1, 2, 3];
arr.push([4, 5, 6]);
//arr would have a modified value of [1, 2, 3, [4, 5, 6]], which is not programming way
//concat offers a way to add a new items to the end of an array without any mutating side effects
//example: the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push
//the function should return an array
function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);