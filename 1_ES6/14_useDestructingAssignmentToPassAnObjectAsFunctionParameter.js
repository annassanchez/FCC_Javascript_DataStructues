//the object in a function can be destructure in a function argument
const profileUpdate = (profileData) => {
	const { name, age, nationality, location } = profileData;
}
//this can be converted to this
/*const profileUpdate = ({ name, age, nationality, location }); => {

}*/
//example:
//initial function
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = (stats) => (stats.max + stats.min) / 2.0; 
  // Only change code above this line
//solution
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max, min}) => (max + min) / 2.0; 
  // Only change code above this line