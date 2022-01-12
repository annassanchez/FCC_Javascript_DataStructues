//convert the characters &, <, >, ", ' in a string to their corresponding HTML entities
function convertHTML(str) {
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
      }
      return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  convertHTML("Dolce & Gabbana");