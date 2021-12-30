//convert a string to spinal case
//spinal case is all-lowercase-words-join-by-dashes
function spinalCase(str) {
    return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  }
  
  spinalCase('This Is Spinal Tap');