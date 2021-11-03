//after n object is created, it can be edited any time:
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  ourDog.name = "Happy Camper"; 
  ourDog["name"] = "Happy Camper";
  //both statements work and make name = "Happy Camper"
  //example:
  // Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog.name = "Happy Coder"