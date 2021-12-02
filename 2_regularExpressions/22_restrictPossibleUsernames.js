//example: change regex to fit the constraints listed
//1. username can only use alphanumeric characters
//2. numbers can only be in the end
//3. username letters can be lowercase or uppercase
//4. usernames have to be at least 2 characters long
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);