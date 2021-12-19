//this are the two kind of properties
function Bird(name) {
    this.name = name;  //own property
  }
Bird.prototype.numLegs = 2; // prototype property
let duck = new Bird("Donald");
//here is how yo add duck's own properties to the array ownProps and prototype properties to the array prototypeProps
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // "name"
console.log(prototypeProps); // "numLegs"
//example: add al of the properties of beagle to the array ownProps
//add all of the prototype properties of Dog to the array prototypeProps
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }
  
  console.log(ownProps);
  console.log(prototypeProps);