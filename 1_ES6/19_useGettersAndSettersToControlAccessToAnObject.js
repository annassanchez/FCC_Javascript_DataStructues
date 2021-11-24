//you can obtain values from an object and set the value of a property within an object
//this are called getters and setters
//getter functions are to simply return (get) the value of an object's private variable to the user without accessing the private variable
//setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function
class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);
//example: use the class keyword to create a thermostat class
//create a getter to obtain the celsus temprerature and a setter to convert it to farenheit
// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    // getter
    get temperature() {
      return 5/9 * (this.fahrenheit - 32);
    }
    // setter
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius