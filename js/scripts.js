//Business Logic

function initialInputRestrictions(text) {
  if (text.trim().length === 0) {
    return "Please enter a number to get a response";
  }
  const justNumbers = text.replace(/[\D]/g, "");
  return justNumbers;
}

function 
if (justNumbers === "0") {
  return "Hello, this is the start!"
}
//I want zero and only zero to always return "Hello, this is the start!"



// for(let index = 0; index < text.length; index +=1)


// if (text === "3") {
//   return "Won't you be my neighbor"
// }
// if (text === "2") {
//   return "Boop"
// }

// I also want the function to loop through each number up to the input, parseInt is needed to turn the string into number.
// return parseInt(text, [0-9])