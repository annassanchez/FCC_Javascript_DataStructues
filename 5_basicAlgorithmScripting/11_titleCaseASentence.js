//example: return the provided string with the first letter of each word capitalized. the rest of the word should be in lower case.
//for the purpose of this exercise, you should also capitalize connecting words like the and of
function titleCase(str) {
    var strToArray = str.toLowerCase().split(" ");
    var result = strToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    }); 
    return result.join(" ");
  }
  
  titleCase("I'm a little tea pot");