//example: repeat a given string for a number of times
//return an empty string if num is not a positive number
//do not use the repeat method
function repeatStringNumTimes(str, num) {
    let result = ''
    while (num > 0) {
        result += str;
        num--
    }
    return result
  }
  
console.log(repeatStringNumTimes("abc", 3));