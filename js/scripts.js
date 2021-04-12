//Business Logic
function initialInputRestrictions(string) {
  const justIntegers = string.replace(/[\D]/g, "");
  if (justIntegers.length === 0) {
    return "Please enter a number to get a response";
  }
  const number = parseInt(justIntegers);
  return beepBoop(number);
}

function beepBoop(numbers) {
  const outputArray = []
  for (let index = 0; index <= numbers; index +=1) {
    const backToString = userInputExceptions(index.toString());
    outputArray.push(backToString);
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
  else return string;
}

// User Logic
$(document).ready(function() {
  $("#numberResult").submit(function(event) {
    const userInput = $("#numberInput").val();
    const output = initialInputRestrictions(userInput);
    $("#outputResults").empty();
    output.forEach(function(item) {
      $("#outputResults").append(`<li>${item}</li>`);
    });
    event.preventDefault();
  });
});