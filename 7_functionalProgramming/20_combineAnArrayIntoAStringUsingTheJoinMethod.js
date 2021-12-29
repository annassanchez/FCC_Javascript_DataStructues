//the join method is used to join the elements of an array together to create a string
//it takes an argument for the delimither that is used to separate tha array elements in the string
const arr = ["Hello", "World"];
const str = arr.join(" "); // return "Hello World"
//example: use the join method (among others) inside sentensify function to make a sentence from the words in the string str
//the function should return a string
//"I-like-Star-Wars" needs to be converted to "I like Star Wars"
//do not use the replace method
function sentensify(str) {
    // Only change code below this line
    return str.split(/\W/).join(" ");
  
    // Only change code above this line
  }
  
  sentensify("May-the-force-be-with-you");