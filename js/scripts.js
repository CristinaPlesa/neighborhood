//Business Logic

function beepBoop(text) {
  const justNumbers = text.replace(/[\D]/g, "");
  return justNumbers;
}

// const string = "01234 blah 567 blah!!* 89"
// beepBoop(string)

// function beepBoop() {
//   userInput = userInput.replace (/\D/g, "");
// }

// return parseInt(text, [0-9])