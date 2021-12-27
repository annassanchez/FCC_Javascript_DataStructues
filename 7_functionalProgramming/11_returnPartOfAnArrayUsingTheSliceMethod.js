//the slice method returns a copy of certain elements of an array
//it can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (non-inclusive)
//if the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array
//the slice method does not mutate the original array, but returns a new one
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
//example: use the slice methopd in the sliceArray function to return part of the anim array given the provided beginSlice and endSlices
//the function should return an array
function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    let arr = anim;
    return arr.slice(beginSlice, endSlice)
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);