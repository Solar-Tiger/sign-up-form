const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const phoneNumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const cPassword = document.getElementById('confirm-password');

const fnameError = document.querySelector('.firstname-error');
const lnameError = document.querySelector('.lastname-error');
const phoneNumberError = document.querySelector('.phonenumber-error');
const passwordError = document.querySelector('.password-error');
const cPasswordError = document.querySelector('.confirm-password-error');

const phoneError = /^\d{3}-\d{3}-\d{4}$/;
const passError = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\s\w-]).{8,}$/;

const lowercaseLetter = /[a-z]/;
const uppercaseLetter = /[A-Z]/;
const numbers = /[0-9]/;
const specialCharacters = /[^\s\w-]/;

// Parameterized the "minLength" by creating minLength instead of hardcoding the 2

// Once the input is valid, removes error

function removeError(inputValue, errorValue) {
  inputValue.style.borderColor = '';
  errorValue.classList.remove('error');
  errorValue.textContent = '';
}

// Validates if first name or last name are are greater than 3 characters

function nameCheck(name, nameError, minLength) {
  if (name.value.length > minLength) {
    removeError(name, nameError);
  } else if (name.value.length <= minLength) {
    name.style.borderColor = 'red';
    nameError.classList.add('error');
    nameError.textContent = "*Name can't be less than 3 characters";
  }
}

// Validates if phone number includes 10 digits and two dashes based on phoneError

function pNumberCheck(pNumber, pNumberError) {
  if (phoneError.test(pNumber.value)) {
    removeError(pNumber, pNumberError);
  } else if (!phoneError.test(pNumber.value)) {
    pNumber.style.borderColor = 'red';
    pNumberError.classList.add('error');
    pNumberError.textContent = '*Invalid phone number';
  }
}

// Validates if password matches 8 or more characters as well as includes 1 lowercase character, 1 uppercase character, 1 number and 1 special character

function passwordCheck(pWord, pWordError, regex, pWordMinLength) {
  if (regex.test(pWord.value)) {
    removeError(pWord, pWordError);
  } else if (!regex.test(pWord.value) || pWord.value.length < pWordMinLength) {
    pWord.style.borderColor = 'red';
    pWordError.classList.add('error');
    pWordError.textContent = passwordRequiredCheck(pWord);
  }
}

// Handles checking for each character to make sure all requirements match

function passwordRequiredCheck(regexCheck) {
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

function confirmPasswordCheck(passOne, passTwo, passTwoError) {
  if (cPassword.value === '' || passOne.value === passTwo.value) {
    removeError(passTwo, passTwoError);
  } else if (passOne.value !== passTwo.value) {
    passTwo.style.borderColor = 'red';
    passTwoError.classList.add('error');
    passTwoError.textContent = '*Passwords do not match';
  }
}

fname.addEventListener('input', () => {
  nameCheck(fname, fnameError, 2);
});
lname.addEventListener('input', () => {
  nameCheck(lname, lnameError, 2);
});
phoneNumber.addEventListener('input', () => {
  pNumberCheck(phoneNumber, phoneNumberError);
});
password.addEventListener('input', () => {
  passwordCheck(password, passwordError, passError, 8);
  confirmPasswordCheck(password, cPassword, cPasswordError);
});
cPassword.addEventListener('input', () => {
  confirmPasswordCheck(password, cPassword, cPasswordError);
});

const validateButton = document.querySelector('button');
const formInputs = document.querySelectorAll('input');

validateButton.addEventListener('click', (e) => {
  formInputs.forEach((input) => {
    if (input.style.borderColor === 'red') {
      e.preventDefault();
    }
  });
});
