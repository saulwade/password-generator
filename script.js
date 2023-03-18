const generatePasswordBtn = document.querySelector("#generate");
const passwordOutput = document.querySelector("#password");

function createPassword(passLength, includeLower, includeUpper, includeNumbers, includeSymbols) {
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
  
  let charSet = "";
  let newPassword = "";

  if (includeLower) charSet += lowerChars;
  if (includeUpper) charSet += upperChars;
  if (includeNumbers) charSet += numberChars;
  if (includeSymbols) charSet += symbolChars;

  if (charSet === "") return null;

  for (let i = 0; i < passLength; i++) {
    const randomIdx = Math.floor(Math.random() * charSet.length);
    newPassword += charSet[randomIdx];
  }

  return newPassword;
}

generatePasswordBtn.addEventListener("click", function() {
  const passLength = parseInt(prompt("Enter the desired password length (between 8 and 128):"));

  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    return;
  }

  const includeLower = confirm("Include lowercase letters?");
  const includeUpper = confirm("Include uppercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSymbols = confirm("Include symbols?");

  const newPassword = createPassword(passLength, includeLower, includeUpper, includeNumbers, includeSymbols);

  if (newPassword === null) {
    alert("Please select at least one character type.");
  } else {
    passwordOutput.value = newPassword;
  }
});
