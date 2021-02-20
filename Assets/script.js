// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays for different characters
var number = ["0123456789"];
var specialChar = ["!%&;*+-./<>?~{}[]()_"];
var alphaLower = ["qwertyuiopasdfghjklzxcvbnm"];
var alphaUpper = ["QWERTYUIOPASDFGHJKLZXCVBNM"];

//character confirmation variables declaration
var confirmLength = "";
var confirmSpecialChar;
var confirmNumber;
var confirmUpper;
var confirmLower;

//prompt to enter number of characters and select character types
function generatePassword() {
  var confirmLength = (prompt("Please choose a length for your password by entering a number of characters from 8 to 128."));

  //ends function if user clicks click cancel
  while (confirmLength == null) {
    return "";
  }

  //if answer is outside of parameters
  while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Length must be between 8 and 128 characters, please try again.");
    var confirmLength = (prompt("Please choose a length for your password by entering a number of characters from 8 to 128."));
  }

  //enter password length
  lengthConfirm = window.confirm("You chose " + confirmLength + " characters. Is this correct?");

  //condition to check that password length is correct
  if (lengthConfirm == false) {
    generatePassword();
  } 
  else {
    confirmPrompts();
  }

  //prompts to confirm types of characters
  function confirmPrompts() {
    confirmSpecialChar = confirm("Click ok to confirm you want symbols in your password.");
    confirmNumber = confirm("Click ok to confirm you want numbers in your password.");
    confirmUpper = confirm("Click ok to confirm you want uppercase letters in your password.");
    confirmLower = confirm("Click ok to confirm you want lowercase letters in your password.");
    }

  //loop in case no characters are chosen
  while(confirmSpecialChar === false && confirmNumber === false && confirmUpper === false && confirmLower === false) {
    alert("You must choose at least one type of characters");
    confirmPrompts();
  }

  //empty arrays to fill with possible characters from user selection
  var passwordCharacters = [];
  var charConfirm = [];

  //statements to sum together the possible characters from user selection
  if (confirmSpecialChar) {
    passwordCharacters = (passwordCharacters + specialChar);
    charConfirm = (charConfirm + "\nSymbols");
  }
  if (confirmNumber) {
    passwordCharacters = (passwordCharacters + number);
    charConfirm = (charConfirm + "\nNumbers");
  }
  if (confirmUpper) {
    passwordCharacters = (passwordCharacters + alphaUpper);
    charConfirm = (charConfirm + "\nUppercase letters");
  }
  if (confirmLower) {
    passwordCharacters = (passwordCharacters + alphaLower);
    charConfirm = (charConfirm + "\nLowercase letters");
  }

  //prompt to make final confirmation that chosen parameters are correct
  finalConfirm = confirm("You want a password with " + confirmLength + " characters, containing:\n" + charConfirm + "\n\nIs this correct?");

  //start over if parameters are incorrect
  while (finalConfirm == false) {
    generatePassword();
  }

  //logs parameters to console
  console.log("%cChosen parameters:\n" + "%c" + confirmLength + " characters" + charConfirm, "color: #bc67bd;", "color: #c0c0c0;");

  //logs possible characters to console
  console.log("%cPossible characters: " + "%c" + passwordCharacters, "color: #bc67bd;", "color: #c0c0c0;");

  //empty string for the generated characters to fill
  var randomPassword = "";

  //loop for randomization
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }

  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  

  //logs generated password
  console.log("%cGenerated password: " + "%c" + password, "color: #bc67bd;", "color: #c0c0c0;");

  console.log("Thanks for stopping by :)");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
