//example: check if a string (first argument, str) wnds with the given target string (second argument, target)
//this challende can be solved with the .endsWith() -- for the purpose of this challenge, we would use the substrings
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
  }
  
 console.log(confirmEnding("Bastian", "n"));
console.log("Bastian".slice("Bastian".length - "n".length) === "n")