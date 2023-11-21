const phoneNumber = document.getElementById('phonenumber');
const password = document.getElementById('password');

const phoneNumberError = document.querySelector('.phonenumber-error');
const passwordError = document.querySelector('.password-error');

const phoneError = /\d{3}\d{3}\d{4}/;
const passError = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\s\w-]).{8,}$/;

const lowercaseLetter = /[a-z]/;
const uppercaseLetter = /[A-Z]/;
const numbers = /[0-9]/;
const specialCharacters = /[^\s\w-]/;

//  Used ChatGPT to come up with the if...else for the ternary operator on the text return check

function validator(input, error, regex) {
  if (input.value === '') {
    input.style.borderColor = '';
    error.textContent = '';
  } else if (!regex.test(input.value)) {
    input.style.borderColor = 'red';
    error.textContent =
      regex === phoneError
        ? '*Invalid phone number'
        : passwordCheck(input, error);
  } else {
    input.style.borderColor = '';
    error.textContent = '';
  }
}

function passwordCheck(regexCheck) {
  if (!lowercaseLetter.test(regexCheck.value)) {
    return '*Requires 1 lowercase letter';
  }
  if (!uppercaseLetter.test(regexCheck.value)) {
    return '*Requires 1 uppercase letter';
  }
  if (!numbers.test(regexCheck.value)) {
    return '*Requires 1 number';
  }
  if (!specialCharacters.test(regexCheck.value)) {
    return '*Requires 1 special character';
  }
  if (regexCheck.value.length < 8) {
    return '*Minimum length 8 characters';
  }
}

phoneNumber.addEventListener('input', () => {
  validator(phoneNumber, phoneNumberError, phoneError);
});
password.addEventListener('input', () => {
  validator(password, passwordError, passError);
});
