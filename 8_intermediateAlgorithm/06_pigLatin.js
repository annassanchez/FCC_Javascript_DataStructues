//pig latin is a way to alter words
//here are the rules
//--if a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it
//--if a word begins with a vowel, just add way to the end
//translate the provided string to pig latin
//input strings are guaranteed to be english words in all lowercase
function translatePigLatin(str) {
    return str
      .replace(/^[aeiou]\w*/, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }
  
console.log(translatePigLatin("wow"));