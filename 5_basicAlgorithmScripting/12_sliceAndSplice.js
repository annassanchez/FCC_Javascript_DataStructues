//example: you are given two arrays and an index
//copy each element of the first into the second array in order
//begin inserting elements at index n of the second array
//return the resulting array. the inputs arrays should remain the same after the function runs
function frankenSplice(arr1, arr2, n) {
    let arr = arr2.slice();
    for(let i = 0; i < arr1.length; i++) {
        arr.splice(n, 0, arr1[i]);
        n++;
    }
    return arr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);