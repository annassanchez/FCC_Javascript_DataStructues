//promise are most useful when you have a proccess taht takes an unknown amount of time in your code
//when you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server
//this can be achieved by using the then method
//the then method is executed immediately after your promise is fulfilled with resolve
myPromise.then(result => {
  
});
//example: add the then method to your promise
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });