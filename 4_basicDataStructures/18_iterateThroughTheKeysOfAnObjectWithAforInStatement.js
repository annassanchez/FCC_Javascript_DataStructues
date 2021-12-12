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
//someimes you may need to iterate through all the keys within an object
//this requiers an specific syntax -- for in statement
for (let user in users) {
    console.log(user);
  }  
  //this would log 'Alan', 'Jeff', 'Sarah' and 'Ryan'
//example: countOnline function accepts one argument (a user object)
//use a for...in statement to loop thorugh the user object passed into the function and return the number of users whose onlie property is set to true
//an example:
/* {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
 */
function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
  }
  console.log(countOnline(users))