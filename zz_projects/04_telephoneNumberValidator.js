//return true if the passed string looks like a valid US phone number
//the user may fill out the field they choose as long as it has the format of a valid US number
//the following are examples of valid formats for US numbers (refer to the test below for variants)
//555-555-5555
//(555)555-5555
//(555) 555-5555
//555 555 5555
//5555555555
//1 555 555 5555
//for this challenge you will be presented with a stirng such as '800-692-7753' or '8oo-six427676;laskdjf'
//your job is to validate or reject the US phone number based on any combinaion of the formats provided above
//the area code is required
//if the country code is provided, you must confirm that the country code is 1
//return true if the string is a valid US phone number; otherwise return false
function telephoneCheck(str) {
    return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);
  }
  
console.log(telephoneCheck("555-555-5555")); 
console.log(telephoneCheck("(555-555-5555"));