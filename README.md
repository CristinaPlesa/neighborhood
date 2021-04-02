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

### Describe: beepBoop(number)

#### Passing

#### Not Passing

* Test: It receives a text string from a user and coverts it to a integar.
  * Code: 
  * Expected Output:

* Test: It recognizes number inputs and ignores all other characters.
  * Code: number = "01234blah567blah!!*89"
  * Expected Output: "0123456789"

* Test: It should return a message ("Please enter a number to get a response") to user if input is empty string.
  * Code: 
  * Expected Output:

* Test: It should return an array with "Hello! This is the start!" string if number 0 is inputted.
  * Code: 
  * Expected Output:

* Test: It should return an array with "Won't you by my neighbor?" string if number contains a 3.
  * Code: 
  * Expected Output:

* Test: It should return an array with "Boop" string if number contains a 2, but not a 3.
  * Code: 
  * Expected Output:

* Test: It should return an array with "Beep" string if number contains a 1, but not a 3 or 2.
  * Code: 
  * Expected Output:

* Test: It should return an array with 4 if the number 4 is inputted.
  * Code: 
  * Expected Output:

* Test: It should return an array with 5 if the number 5 is inputted.
  * Code: 
  * Expected Output:

* Test: It should return an array with 6 if the number 6 is inputted.
  * Code: 
  * Expected Output:

* Test: It should return an array with 7 if the number 7 is inputted.
  * Code: 
  * Expected Output:

* Test: It should return an array with 8 if the number 8 is inputted.
  * Code: 
  * Expected Output:

* Test: It should return an array with 9 if the number 9 is inputted.
  * Code: 
  * Expected Output:

* Test: It should take a users new input and add the response to a looping array for a new result each time.
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