//Business Logic

function beepBoop(text) {
  const justNumbers = text.replace(/[\D]/g, "");
  return justNumbers;
  if (text.trim === 0) {
    return "Please enter a number to get a response";
  }
}

// return parseInt(text, [0-9])