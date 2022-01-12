//create a function that sums two arguments together
//if only one argument is provided, then return a function that excepts one argument and returns the sum
//for example, addTogether(2, 3) should return 5, and addTogether(2) should retirnd a function
//calling this returned function with a single argument will then return the sum
var sumTwoAnd = addTogether(2);
//sumTwoAnd(3) returns 5
//if either argument isn't valid number, return undefined
function addTogether() {
    const [first, second] = arguments;
    if (typeof(first) !== "number") 
      return undefined;
    if (second === undefined)
      return (second) => addTogether(first, second);
    if (typeof(second) !== "number")
      return undefined;
    return first + second;
  }
  
  addTogether(2,3);