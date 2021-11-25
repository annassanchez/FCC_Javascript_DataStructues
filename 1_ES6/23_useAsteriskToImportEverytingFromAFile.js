//if you want to import all of the contents of a file to another one, you use the syntax import * as 
import * as myMathModule from "./math_functions.js";
//the import statement creatates an object called myMathModule
//this object containts all the exports frm the selected file, so you can access the functions as you would with any object property
myMathModule.add(2,3);
myMathModule.subtract(5,3);
//example: use the import * as syntax to import everything from a given file
import * as stringFunctions from "./string_functions.js"
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");