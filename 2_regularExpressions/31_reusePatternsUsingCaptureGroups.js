//if you want to match a word that occurs multiple times:
let repeatStr = "row row row your boat";
//you could use /row row row/, but if you don't know the specific word repeated capture groups can be used to find repeated substrings
//capture groups are constructed by enclosing the regex pattern in parentheses; for example: /(\w+)
//the substring matched by the group us saved to a temporary variable that can be accessed within the same regex using a backslash an the number of capture group (\1)
//capture groups are numbered by the position of the opening parentheses (left to right) starting ar 1
//for example: match a word taht occurs thrice separated by spaces
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
//example: match a string taht consists of only the same number repeated three times separated by singe spaces
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);