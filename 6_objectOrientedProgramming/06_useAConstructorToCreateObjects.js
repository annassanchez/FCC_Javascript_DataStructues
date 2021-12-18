function Bird() {
    this.name = "Albert";
    this.color  = "blue";
    this.numLegs = 2;
  }
  
  let blueBird = new Bird();
//this inside the constructor always refers to the object being created
//notice that the new operator is used when calling a contructor
//this tells js to create a new instance of Bird called blueBird
//without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results
//now bluebird has all the properties defined inside the bird constructor
blueBird.name;
blueBird.color;
blueBird.numLegs;
//just like any other object, its properties can be accessed and modified
//example: use the given constructor and add a new instance to it, assigning it to a variable hound
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  let hound = new Dog()
  hound.species = "hound";