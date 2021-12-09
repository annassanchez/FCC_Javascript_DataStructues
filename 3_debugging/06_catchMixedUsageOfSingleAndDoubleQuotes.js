//JS allows the use of both single and double quotes to declare a string
//deciding which one to use comes down to personal preference, mostly
//be careful not to close the string too early, that can cause a syntax error
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
//const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
//it's okay to use only one of the quotes
//to escape the quotes inside the string by using the \
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
//example: fix the href so taht the double quote marks around the entire string
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);