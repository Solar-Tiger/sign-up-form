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

const phoneError = /^\d{3}-?\d{3}-?\d{4}-?$/;
const passError = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\s\w-]).{8,}$/;

const lowercaseLetter = /[a-z]/;
const uppercaseLetter = /[A-Z]/;
const numbers = /[0-9]/;
const specialCharacters = /[^\s\w-]/;

// Parameterized the "minLength" by creating minLength instead of hardcoding the 2

function nameCheck(name, nameError, minLength) {
  if (name.value === '' || name.value.length > minLength) {
    name.style.borderColor = '';
    nameError.classList.remove('error');
    nameError.textContent = '';
  } else if (name.value.length <= minLength) {
    name.style.borderColor = 'red';
    nameError.classList.add('error');
    nameError.textContent = "*Name can't be less than 2 characters";
  }
}

function pNumberCheck(pNumber, pNumberError) {
  console.log(phoneError.test(pNumber.value));

  if (pNumber.value.length === 0 || phoneError.test(pNumber.value)) {
    pNumber.style.borderColor = '';
    pNumberError.classList.remove('error');
    pNumberError.textContent = '';
  } else if (!phoneError.test(pNumber.value)) {
    pNumber.style.borderColor = 'red';
    pNumberError.classList.add('error');
    pNumberError.textContent = '*Invalid phone number';
  }
}

function passwordCheck(pWord, pWordError, regex, pWordMinLength) {
  console.log(regex.test(pWord.value));
  if (pWord.value === '' || regex.test(pWord.value)) {
    pWord.style.borderColor = '';
    pWordError.classList.remove('error');
    pWordError.textContent = '';
  } else if (!regex.test(pWord.value) || pWord.value.length < pWordMinLength) {
    pWord.style.borderColor = 'red';
    pWordError.classList.add('error');
    pWordError.textContent = passwordRequiredCheck(pWord);
  }
}

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
    passTwo.style.borderColor = '';
    passTwoError.classList.remove('error');
    passTwoError.textContent = '';
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
