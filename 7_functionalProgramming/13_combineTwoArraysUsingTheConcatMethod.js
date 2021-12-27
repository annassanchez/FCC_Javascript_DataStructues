//concatenation means to join items end to end
//js offers teh concat method for both strings and arrays that work in the same way
//for arrays, the method is called on one,m then another array is provided as the argument to concat, which is added to the end of the first array
//it returns a new array and does not mutate either of the originalk arrays
[1, 2, 3].concat([4, 5, 6]); // returns [1, 2, 3, 4, 5, 6]
//example: use the concat method in the nonMutatingConcat function to concatenate attach to the end of original
//the function should return the concatenated array
function nonMutatingConcat(original, attach) {
    // Only change code below this line
    return original.concat(attach)
    // Only change code above this line
  }
  
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingConcat(first, second);