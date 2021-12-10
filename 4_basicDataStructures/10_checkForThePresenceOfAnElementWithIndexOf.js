//indexOf() is a method that allows to quickly and easily check for the pesence of an element of an array
//indexOf() takes an element as a parameter, and when called, returns the position or -1 if the element does not exist on the array
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1
//example: given a function, modify it so that if an element is on an array returns true 
function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) != -1){
      return true } else {
      return false}
    // Only change code above this line
  }
  
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));