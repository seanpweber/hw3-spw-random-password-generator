// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays for different characters
var number = ["0123456789"]
var specialChar = ["!%&;*+-./<>?~{}[]()_"]
var alphaLower = ["qwertyuiopasdfghjklzxcvbnm"]
var alphaUpper = ["QWERTYUIOPASDFGHJKLZXCVBNM"]

//character confirmation variables declaration
var confirmLength = "";
var confirmSpecialChar;
var confirmNumber;
var confirmUpper;
var confirmLower;

//prompt to enter number of characters and select character types
function generatePassword() {
  var confirmLength = (prompt("Please choose a length for your password by entering a number of characters from 8 to 128."));

  //if answer is outside of parameters
  while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Length must be between 8 and 128 characters, please try again.");
    var confirmLength = (prompt("Please choose a length for your password by entering a number of characters from 8 to 128."));
  }

  //enter password length
  lengthConfirm = window.confirm("You chose " + confirmLength + " characters. Is this correct?");

  //loop to check that password length is correct
  while (lengthConfirm == false) {
    generatePassword();
  }

  //prompts to confirm types of characters
  confirmSpecialChar = confirm("Click ok to confirm you want symbols in your password.");
  confirmNumber = confirm("Click ok to confirm you want numbers in your password.");
  confirmUpper = confirm("Click ok to confirm you want uppercase letters in your password.");
  confirmLower = confirm("Click ok to confirm you want lowercase letters in your password.");
  

  //loop in case no characters are chosen
  while(confirmSpecialChar === false && confirmNumber === false && confirmUpper === false && confirmLower === false) {
    alert("You must choose at least one type of characters");
    confirmSpecialChar = confirm("Click ok to confirm you want symbols in your password.");
    confirmNumber = confirm("Click ok to confirm you want numbers in your password.");
    confirmUpper = confirm("Click ok to confirm you want uppercase letters in your password.");
    confirmLower = confirm("Click ok to confirm you want lowercase letters in your password.");
  }

  //empty array to fil with all possible characters from user selection
  var passwordCharacters = [];

  if (confirmSpecialChar) {
    passwordCharacters = (passwordCharacters + specialChar);
  }
  if (confirmNumber) {
    passwordCharacters = (passwordCharacters + number);
  }
  if (confirmUpper) {
    passwordCharacters = (passwordCharacters + alphaUpper);
  }
  if (confirmLower) {
    passwordCharacters = (passwordCharacters + alphaLower);
  }

  console.log(passwordCharacters);

  //empty string for the generated characters to fill
  var randomPassword = "";

  //for loop for randomization
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
    }

  console.log("Thanks for stopping by :)");

  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
