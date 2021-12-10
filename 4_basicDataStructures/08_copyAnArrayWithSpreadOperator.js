//slice() allows u to be selective baout what elements of an array to copy, the spread operator allows to copy all of an array's statements
//the spread syntax simply looks like this: ...
//you can copy an array so:
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray]; //returns [true, true, undefined, false, null]
//thatArray remains undefined
//example: edit the function so it can copy an array an specified number of times
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr])
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));