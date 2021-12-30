//you will be provided with an initial array (first argument in the destroyer function), followed by one or more arguments
//remove all elements from the initial array that are of the same value as these arguments
//note: you have to use the arguments object
function destroyer(arr, ...removedVals) {
    return arr.filter(item => !removedVals.includes(item));
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);