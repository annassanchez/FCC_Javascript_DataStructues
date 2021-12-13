//example: create a function that reverses a string
function reverseString(str) {
    for (var string = "", i = str.length -1; i >= 0; i--) {
      string += str[i];
    }
    return string;
  }
  
  reverseString("hello");