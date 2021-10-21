//to access what it tis called an array of arrays, we use indices
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
  ];
  arr[3]; //[[10, 11, 12], 13, 14]
  arr[3][0]; //[10, 11, 12]
  arr[3][0][1]; //11
//example: get the 8 within the given array
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];