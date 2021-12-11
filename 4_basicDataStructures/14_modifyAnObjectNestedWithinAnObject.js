//let's look at a more complex object
//object properties can be nested to an arbitrary depth, and their values can be any type of data supported by js
//consider the following:
let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
      totalUsers: 99,
      online: 80,
      onlineStatus: {
        active: 67,
        away: 13,
        busy: 8
      }
    }
  };
//nestedObject has three properties:
//id -- value is a number
//date -- value is a string
//data -- value is an object with nested structure
//structures acn quickly become complex, but we can use the same notation to access the information we need
//for example, to asign 10 to the busy property, you can use dot notation
nestedObject.data.onlineStatus.busy = 10;
console.log(nestedObject);
//example: modify the value of the nested object of the given object
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45;
  // Only change code above this line
  
  console.log(userActivity);