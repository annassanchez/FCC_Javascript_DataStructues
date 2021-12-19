//anytime a constructor creates a new object, that oibject is said to be an instance of its constructor
//js gives a convenient way to verify this with the instanceof operator
//instanceof allows you to compare an object to a constructor returning true/false based on if that object was created with the constructor
let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
  crow instanceof Bird; //this would return true
//if an object creaed without using a constructor is passed through instanceof it will verify that is not an instance of that constuctor
let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
  };
  
  canary instanceof Bird; // this would return false
  //example: create a new instance of the of the House constructor, calling it myHouse and passing a number of bedrroms
  //verify with instanceof that it it an instance of house
  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House(2);
  myHouse instanceof House;
  