//a variable assigned to const is still mutable
//const declaration only prevents reassignment of the variable identifier
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
//the array s mutable, but because const was used, you cannot use the variable identifier s to point a different array using the assigntment operator
//change the given s array to [2, 5, 7]
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  "use strict";
  s[0] = 2;
  // Using s = [2, 5, 7] would be invalid
  s[1] = 5;
  s[2] = 7;
  return s;
  // Only change code above this line
}
console.log(editInPlace());