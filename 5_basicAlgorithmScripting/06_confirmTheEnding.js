//example: 
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
  }
  
 console.log(confirmEnding("Bastian", "n"));
console.log("Bastian".slice("Bastian".length - "n".length) === "n")