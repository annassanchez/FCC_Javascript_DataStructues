//there's a principle called Dont Repeat Yourself (DRY)
//repeated code is a problem because any change requires fixing code in a multiple places
//this usually means more work for programmers and more room for errors
//example: describe method is shared by Bird and Dog
Bird.prototype = {
    constructor: Bird,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
  Dog.prototype = {
    constructor: Dog,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
//the describe method is repeated in two places
//the code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
//since Animal includes the describe method, you can remove it from Bird and Dog
Bird.prototype = {
    constructor: Bird
  };
  
  Dog.prototype = {
    constructor: Dog
  };
//example: he eat method is repeated in Cat and Bear
//edit the code in the spirit of DRY by moving the eat method to the Animal supertype
function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };