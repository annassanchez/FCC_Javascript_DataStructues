//in the last challenge, the birds ceated with the Bird constructor are automatically named Albert, are blue and have 2 legs
//what if you want birds with different property values=
//you can change it manually but it takes a lot of work
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
//to more easily create different Bird objects, you can desifn your Bird constructor to accept parameters
function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
let cardinal = new Bird("Bruce", "red");
//then you can pass the values as arguments to define each unique bird
//the cardenal has new name and color properties, but the same number of legs
cardinal.name
cardinal.color
cardinal.numLegs
//the constructor is more flexible
//it's possible now to define properties for each Bird ar the time it is created, which one way that JS constructors are so useful
//they group objects together based on a share number of characteristics and behaviours and define a blueprint
//example: create another constructor
//this time set it up to take name and color as parameters and have a fixed name of numLegs
//create a new variable and pass the arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog("Sally", "gold brown")