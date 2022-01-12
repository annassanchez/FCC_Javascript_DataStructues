//fill in the object constructor with the following methods below
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
//run the test to see the expected output for each method
//the methods that take an argument must accept only one argument and it has to be a string
//these methods must be the only avaliables means of interacting with the object
const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var fullName = firstAndLast;
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
    this.getFullName = function() {
      return fullName;
    };
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
  const bob = new Person('Bob Ross');
  bob.getFullName();