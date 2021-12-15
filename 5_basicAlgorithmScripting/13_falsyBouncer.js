//example: remove all falsy values from an array
//falsy values in JS are false, null, 0, "", undefined, NaN
//hint: try convertin each array item to a boolean 
function bouncer(arr) {
    let isTrueSet = 0;
    let array = [];
    for(let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        array.push(arr[i]);
      }  
    }
    return array;
  }
  
  bouncer([7, "ate", "", false, 9]);