//we can add, modify and remove keys from objects
//but if you only want to check a propert, js has two ways to do this
//one is the method hasOwnProperty() the other uses the in keyword
users.hasOwnProperty('Alan'); //returns true
'Alan' in users; //returns true
//example: finish writing the function so that it returns true if the object passed contains all four namesin users
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if (userObj.hasOwnProperty('Alan') &&
    userObj.hasOwnProperty('Jeff') &&
    userObj.hasOwnProperty('Sarah') &&
    userObj.hasOwnProperty('Ryan')) {
      return true
    } else {
      return false
    }
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));