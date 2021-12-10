//as push() and unshift() add elements, there are methods that can do the opposite
//pop() removes an element from the end of the array
let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop();
//shift() removes the first element of the array
greetings.shift();
//it can also added to a variable
let popped = greetings.pop()
//example: modify the array with the given function using pop() and shift() to remove the first and last elements
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));