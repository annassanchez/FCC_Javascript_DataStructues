//a side effect of the sort method is that is that it changes the order of the elements i nthe original array
//((in other words, it mutates the array in place
//one way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method
//example: use the sort method in the nonMutationSort function to sort the elements of an array in ascending order
//the function should return a new array, and not mutate the globalArray variable
var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  return [].concat(arr).sort(function(a, b) {
      return a - b;
    });
  // Only change code above this line
}

nonMutatingSort(globalArray);