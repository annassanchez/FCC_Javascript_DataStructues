//constructors are functions that create new objects
//they define properties and behaviors that will belong to the new object
//think of them as ablueprint for the creation of new objects
function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }
//constructors follow a few conventions
//constructors are defined with a capitalize name to distingish them from other functions that are not consturctors
//constructors use keyword this to set properties of the object they will create inside the constructor, this refers to the new object it will create
//constructors define properties and behaviour instead ofreturning a value as other functions might  
//example: create a constructor with proerties name, color and numLegs that are set to string, a string, and a number, respectively
function Dog() {
    this.name = "Pecas";
    this.color = "brown";
    this.numLegs = 4;
  }