//the dna striang is missing the pairing element
//take each character, get its pair, and retirn the result as a 2d array
//base pairs are a pair of AT and GG
//match the missing element to the provided character
//return the provided character as the fisrt element in each array
//the input GCG should return [["G", "C"], ["C", "G"], ["G", "C"]]
//the character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array
function pairElement(str) {
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    var arr = str.split("");
    return arr.map(x => [x, pairs[x]]);
  }
  
console.log(pairElement("GCG"));