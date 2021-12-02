//sometimes you can specify the lower number of patterns with no upper limit
//for example, to match the 'hah' apearing at least 3 times 
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
//example: match the word "Hazah" only when it has four or more z's
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);