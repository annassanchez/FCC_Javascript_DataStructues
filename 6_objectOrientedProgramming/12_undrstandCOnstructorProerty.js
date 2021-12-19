//there is a special constructor property located on the object instances duck and beagle that were created in the previous challenges
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); // true
console.log(beagle.constructor === Dog); // true
//the constructor property is a reference to the constructor function that created the instance
//the adtvantage of the constructor proerty is that it's possible to check for this property to find out what kind of object it is
function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
      return true;
    } else {
      return false;
    }
  }
//since constructor property can be overwritten it's better to use the instanceof method to check the type of an object  
//example: write a joinDogFraternity funcction that takes a candidate paramenter and, usning the constructor proerty, return true if the candidate is a Dog, and otherwise return false
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }