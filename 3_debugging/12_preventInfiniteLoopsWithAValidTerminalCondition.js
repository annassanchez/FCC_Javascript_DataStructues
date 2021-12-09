//loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends looping
//infinite loops are likely to freeze or crash the browser and cause general program execution mayhem which no one wants
//there was an example of an infinite loop in the introduction to this section -- it had no terminal condition to break out of the while loop inside loopy() 
function loopy() {
	while(true) {
		console.log("Hello World");
	}
}
//example: fix the loop function so that i <= 4
function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
  }