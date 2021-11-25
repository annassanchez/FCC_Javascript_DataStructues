//a promise has three estates -- pending, fulfilled, rejected
//the promise in the last challenge in the pending
//the resolve and rejected parameters are given to the promise argument 
//resolve is used when you want your promise to succeed
//reject is used when you want it to fail
const myPromise = new Promise((resolve, reject) => {
    if(conditionHere) {
      resolve("Promise was fulfilled");
    } else {
      reject("Promise was rejected");
    }
  });
//example: make the promise handle success and failure
//pass ressolve -- We got data; pass reject -- Data not received
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });