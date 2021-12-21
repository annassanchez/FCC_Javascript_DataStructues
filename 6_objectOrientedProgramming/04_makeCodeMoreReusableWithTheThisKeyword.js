//the last challenge introduces a method to the duck object
//example: modify the dog.sayLegs to the remove the reference to dog and use the this keyword
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();