//up until now, we've been adding properties to the prototype individually
Bird.prototype.numLegs = 2;
//after a few properties, this can become tedious
Bird.prototype.eat = function() {
    console.log("nom nom nom");
  }
  
  Bird.prototype.describe = function() {
    console.log("My name is " + this.name);
  }
//a more efficient way is to ser the prototype to a new object that already contains the properties
Bird.prototype = {
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
//example: add the property numLegs and the two methods eat() and describe()
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function() {
      console.log("ñam ñam")
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };