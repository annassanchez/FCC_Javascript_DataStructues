//so far, we've seen two distinct principles for functional programming
//1. dont alter a variable or object -- create new variables and objects and return them if need be from a function
//hint using something like const newArr = arrVat, there arrVar is an array will simply create a reference to the existing variable and not a copy
//so changing a value in newArr would change the value in arrVar
//2. declare functions parameters -- any computation inside a function depends only on the arguments passed to the function and not on any glombal object or variable
//example: rewrite the code so the global array bookList is not changed inside either function
//the add function should add the given bookName to the end of the array passed to it and return a new array list.
//the remove function should remove the ggiven bookName thom the array passed to it
//note: both funcions should return an array and any new parameters should be added before the bookName parameter
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (arr, bookName) {
  let newArr = [...arr]; 
  newArr.push(bookName);
  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove (arr, bookName) {
  let newArr = [...arr];
  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);