const generateBtn = document.querySelector("#generate");
const passwordTextarea = document.querySelector("#password");

function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

generateBtn.addEventListener("click", function() {
  const passwordLength = 20; // Change this to the desired length of your password
  const password = generatePassword(passwordLength);
  passwordTextarea.value = password;
});
