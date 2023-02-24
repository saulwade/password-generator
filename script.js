// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var upperLetters = ["A", "E", "I", "O", "U"];
  var lowerLetters = ["a", "e", "i", "o", "u"];
  var specialCharacters = ["*", "#", "!"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var lenght = 8;
  var pass = "";

  for (var i = 0; i <= lenght; i++){
    var randomnumb = Math.floor(Math.random() * specialCharacters.numbers.lowerLetters.upperLetters.lenght);
  }

  document.getElementById('password').value = password;


}


