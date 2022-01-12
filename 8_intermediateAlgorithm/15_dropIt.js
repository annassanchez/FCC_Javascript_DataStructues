//given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it
//then return the sert of the array once the condition is satisfied, otherwise, arr should be returned as an empty array
function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

dropElements([1, 2, 3], function(n) {return n < 3; });