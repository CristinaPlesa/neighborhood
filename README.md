# Mr. Roboger's Neighborhood

#### Webpage that takes user input and returns back a response from Mr. Roboger.

#### By Cristina Plesa

## Technologies Used

* HTML
* Javascript
* CSS

## Description

This webpage is designed to take a user input and return back specific messages. The messages rely on loop methods within the business logic in Javascript. Different numbers are looped through a function in order to return back the appropriate response.

## Setup/Installation Requirements

* Clone from GitHub: `$ git clone https://github.com/CristinaPlesa/neighborhood`
* Navigate to the top level of the directory.
* Open index.html in your browser

## Specs/Tests

### Describe: initialInputRestrictions(text), userInput(text), beepBoop(text)

#### Passing

* Test: It ignores spaces and non-number characters from user input.
  * Code: const string = "01234 blah 567 blah!!* 89"
  * Code: initialInputRestrictions(string)
  * Expected Output: "0123456789"

* Test: It should return a message ("Please enter a number to get a response") to user if input is empty string.
  * Code: const string = ""
  * Code: initialInputRestrictions(string)
  * Expected Output: "Please enter a number to get a response"

* Test: It should return an array with "Hello! This is the start!" string if number 0 is inputted.
  * Code: userInputExceptions("0")
  * Expected Output: "Hello, this is the start!"

* Test: It should take the users input and push the results into an empty array.
  * Code: beepBoop("01234 blah 567 blah!!* 89")
  * Expected Output: "0", "1", "2", "3", "4", " ", "b", "l", "a", "h", " ", "5", "6", "7", " ", "b", "l", "a", "h", "!", "!", "*", " ", "8", "9"

* Test: It should return an array with "Won't you by my neighbor?" string if number contains a 3.
  * Code: userInputExceptions("123 hello0 456")
  * Expected Output: "Won't you be my neighbor"

* Test: It should return an array with "Boop" string if number contains a 2, but not a 3.
  * Code: serInputExceptions("222567the hello")
  * Expected Output: "Boop"

* Test: It should return an array with "Beep" string if number contains a 1, but not a 3 or 2.
  * Code: userInputExceptions("1111567 hello there!")
  * Expected Output: "Beep"

#### Not Passing

<!-- * Test: It receives a text string from a user and coverts it to a integar.
  * Code: 
  * Expected Output: -->

* Test: It should take a users input and loop through the number displayed in the form of an array.
  * Code:
  * Expected Output:

* Test: 
  * Code: 
  * Expected Output:

## Known Bugs

* 

## License

MIT Copyright (c) 2021 Cristina Plesa

## Contact Information

Add a new issue to this repo to contact me about any issues.