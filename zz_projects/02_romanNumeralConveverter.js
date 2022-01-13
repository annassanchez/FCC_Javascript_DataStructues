function convertToRoman(num) {
    if (typeof num !== 'number') 
        return false; 
  
    var digits = String(+num).split(""), key = [
        "","M","MM","MMM","MMMM","MMMMMM","MMMMMMM","MMMMMMMM","MMMMMMMMM","MMMMMMMMMM",
        "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
        "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
        "","I","II","III","IV","V","VI","VII","VIII","IX"], roman = "", a = 4;
    while (a--)
      roman = (key[+digits.pop() + (a * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }
console.log(convertToRoman(1000));