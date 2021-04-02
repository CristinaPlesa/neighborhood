//Business Logic

function beepBoop(text) {
  if (text.trim().length === 0) {
    return "Please enter a number to get a response";
  }
  if (text === "0")
    for(let index = 0; index < text.length; index +=1) {
      return "Hello, this is the start!"
    }
  if (text === "3")
    for(let index = 0; index < text.length; index +=1) {
      return "Won't you be my neighbor"
    }
  if (text === "2")
    for(let index = 0; index < text.length; index +=1) {
      return "Boop"
    }
  const justNumbers = text.replace(/[\D]/g, "");
  return justNumbers;
}

// return parseInt(text, [0-9])