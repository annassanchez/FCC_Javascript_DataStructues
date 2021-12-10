//arrays can be defined with a length of any number elements that can be removed over time -- arrays are mutable
//we will look at two method with which we can programatically modify an array: .push() and .unshift()
//both methods take one elements and add thos to the array is being called on
//.push() adds elements at the end of the array
//.unshift() adds elements at the beginning
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX'); //returns ['XIX', 'XX', 'XXI', 'XXII']
romanNumerals.push(twentyThree); //returns ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
//example: we have defined a function that passes an array as an argument
//modify by using push() and unshift()
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three')
    arr.push(7, 'VIII', 9)
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));