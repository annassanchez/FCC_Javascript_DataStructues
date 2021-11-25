//import allows to choose which parts of a file or module you want to load
import { add } from './math_functions.js';
//also you can add multiple parts of the code at once
import { add, subtract } from './math_functions.js';
//example: import uppercaseString and lowercaseString from string_functions.js
import { uppercaseString, lowercaseString } from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");