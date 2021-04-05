//Business Logic

function initialInputRestrictions(string) {
  if (string.trim().length === 0) {
    return "Please enter a number to get a response";
  }
  const justIntegars = string.replace(/[\D]/g, "");
  const numbers = parseInt(justIntegars);
  return numbers;
}

function beepBoop(text) {
  const outputArray = []
  for (let index = 0; index < text.length; index +=1) {
    outputArray.push(text[index]);
  }
  return outputArray;
}

function userInputExceptions(string) {
  if (string === "0") {
    return "Hello, this is the start!";
  }
  if (string.includes("3")) {
    return "Won't you be my neighbor";
  }
  if (string.includes("2")) {
    return "Boop"
  }
  if (string.includes("1")) {
    return "Beep"
  }
}


// I also want the function to loop through each number up to the input, parseInt is needed to turn the string into number.
// return parseInt(text, [0-9])