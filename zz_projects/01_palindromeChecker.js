//return true id the given string is a palindrome
//otherwise return false
//a palindrome is a word or a sentence that's spelled the same way both forward and backward, ignoring punctuation, case and spacing
//note: all the non-alphanumerical characters need to be removed (punctuation, spaces symbols)
//everything needs to be into the same case (lower or upper) in order to check for palindromes
//We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
//We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
    var test = str.replace(/[^0-9a-z]/g, '').toLowerCase();
    var testReversed = test.split('').reverse().join('');
    return test === testReversed;
  }
  
console.log(palindrome("__eye"));