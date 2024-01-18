// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numCase = '1234567890'
const specialCase = '!@#$%^&*():"<>?/`~_-+=}]|{['
function generatePassword(){
  let passwordLength = prompt('Pick a length between 8-128');
  if (passwordLength < 8 || passwordLength > 128 ){
    alert ('Choose between 8 and 128 charachters')
    return generatePassword()
  }
  let userChoice = ''
  let lowerConfirm = confirm ('Would you like lower case letters?')
if (lowerConfirm === true ) {
  userChoice += lowerCase
}
  let upperConfirm = confirm ('Would you like upper case letters?')
  if (upperConfirm === true ){
    userChoice += upperCase
  }
  let numConfirm = confirm ('Would you like numbers?')
  if (numConfirm === true ) {
    userChoice += numCase
  }
  let specialConfirm = confirm ('Would you like special charachters?')
if (specialConfirm === true ) {
  userChoice += specialCase
}
if (lowerConfirm === false && upperConfirm === false && numConfirm === false && specialConfirm === false){
 alert ('you must select at least one choice')
  return generatePassword ()
}
let result = ''
for (let i = 0; i < passwordLength; i++ ){
  result += userChoice.charAt(Math.floor(Math.random()* userChoice.length)) 
}
  return result
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
