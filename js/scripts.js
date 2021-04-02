//Business Logic

function beepBoop(text) {
  if (text.trim().length === 0) {
    return "Please enter a number to get a response";
  }
  const justNumbers = text.replace(/[\D]/g, "");
  return justNumbers;
}

// return parseInt(text, [0-9])