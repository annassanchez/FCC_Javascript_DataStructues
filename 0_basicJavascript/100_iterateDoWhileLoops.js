//the first do passes the code no matther what until the while condition evaluatesto true
const ourArray = [];
let i = 0;

do {
	ourArray.push(i);
	i++;
} while (i < 5);
//the do..while can also be different from other loops in js because of how the while part works
const ourArray = [];
let i = 5;

do {
	ourArray.push(i)
	i++;
} while (i < 5);
//with only a while loop, it will work so:
const ourArray = [];
let i = 5;

while (i < 5) {
	ourArray.push(i);
	i++;
} 
//change the while loop to a do..while so the loop will push only the number 10
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 11)