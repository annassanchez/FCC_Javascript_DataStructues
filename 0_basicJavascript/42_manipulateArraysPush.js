//to add more elements to an existing arrays in js, you can use the .push() funcion
var arr1 = [1,2,3];
arr1.push(4); // arr1 = [1, 2, 3, 4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]); // arr2 = ["Stimpson", "J", "cat", ["happy", "joy"]]
//exmaple: push ["dog", 3] to the existing array
// Setup
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])