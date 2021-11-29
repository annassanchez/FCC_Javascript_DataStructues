//you can search for a literal pattern with some flexibilities with character classes
//character classes allow yoyu to define a group of characters you wish to match placing them within [ ]


//example: use a acharacter class with vowels in your regex to find all the vowels
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line