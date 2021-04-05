//Business Logic

function initialInputRestrictions(text) {
  if (text.trim().length === 0) {
    return "Please enter a number to get a response";
  }
  const justNumbers = text.replace(/[\D]/g, "");
  return justNumbers;
}

function beepBoop(text) {
  const outputArray = []
  for (let index = 0; index < text.length; index +=1) {
    outputArray.push(text[index]);
  }
  return outputArray;
}

function userInputExceptions(text) {
  if (text === "0") {
    return "Hello, this is the start!";
  }
  if (text.includes("3")) {
    return "Won't you be my neighbor";
  }
  if (text.includes("2")) {
    return "Boop"
  }
  if (text.includes("1")) {
    return "Beep"
  }
}


// I also want the function to loop through each number up to the input, parseInt is needed to turn the string into number.
// return parseInt(text, [0-9])