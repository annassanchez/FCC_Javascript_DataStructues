//the last several challenges covered a number of useful array an string methods that follow functional programming principles
//we've also learned about reduce, which is a powerful method used to reduce problems to simpler forms
//from computing averages to sorting, any array operation can be achieved by applying it
//recall that map and filter are special cases of reduce
//let's combine whar we've learned to fsolve a practical problem
//many content management sites (CMS) have the titles of a post added to part of the url for simple bookmarking purposes
//for example, if you wirte a Medium post titled `Stop Using Reduce`, it's like the URL would have some form of the title string in it (.../stop-using-reduce)
//example: fill in the urlSlug function so it converts a string tilte and returns the hyphenated version for the URL
//you can use any of the methods covered in this section and fon't use replace. the requirement:
//the input is a string with spaces and title- cased words
//the output is a string with the spaces between words replaced by a hyphen (-)
//the output should be all lower-cased letters
//the output should not have any spaces
// Only change code below this line
function urlSlug(title) {
    return title
      .split(" ")
      .filter(substr => substr !== "")
      .join("-")
      .toLowerCase();
  }
  // Only change code above this line