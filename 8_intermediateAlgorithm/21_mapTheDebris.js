//return a new array that transforms the elements' average altitude into their orbital periods (in seconds)
//the array will contain objects in the format {name: 'name', avgAlt: avgAlt}
//you can read about orbital periods on Wikipedia
//the values should be rounded to the nearest whole number
//the body being orbited is earth
//the radius of Earth is 6367.4447 km and the GM value is 398600.4418 km3s-2
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];
    
    const getOrbPeriod = function(obj) {
      const c = Math.pow(earthRadius + obj.avgAlt, 3);
      const b = Math.sqrt(c / GM);
      const orbPeriod = Math.round(a * b);
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
    for (let elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
    return newArr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);