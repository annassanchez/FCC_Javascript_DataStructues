//one off by one errors crop up when you''re trying to target a specific index on a string array or when looping over the indices
//js indexes starts at zero, which means the last index is always one less than the length
//if you try to access an indez equal to the length, the program might throw "ndex out of range" or undefined

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
	console.log(alphabet[j])
}
for (let j = 1; j < len; j++) {
	console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
	console.log(alphabet[k])
}
//example: fix the two indexing errors in the function so all the numbers from 1 to 5 are printed 
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();