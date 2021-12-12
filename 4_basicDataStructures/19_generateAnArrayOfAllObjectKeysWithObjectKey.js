//you can also generate an array that contains all the keys stored in an object with the Object.keys()
//example: finish writing the function so taht t returns an array containing all the properties in the given object
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
    let arr = Object.keys(obj);
    return arr;
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users));