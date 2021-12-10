//the fundamental feature of a data structure is to be able to retrieve that data on command
//let's define this array and see how to retrieve the data
let ourArray = ["a", "b", "c"];
//in an array each item has an index
//the index doubles as the position of taht item in the array and how you reference it
//in js arrays are zer-indexed; the first item of the array is at the 0 position
//to retrieve an element, you use the following notation:
let ourVariable = ourArray[0];
//in addition to accessing the value associated with the index, you can also set an indez to a value
ourArray[1] = "not b anymore";
//example: replace the b at index 1
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "not b anymore";
// Only change code above this line
console.log(myArray);