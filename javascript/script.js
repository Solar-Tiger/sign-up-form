const phoneNumber = document.getElementById('phonenumber');
const password = document.getElementById('password');

const phoneNumberError = document.querySelector('.phonenumber-error');
const passwordError = document.querySelector('.password-error');

const phoneError = /\d{3}\d{3}\d{4}/;
const passError =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

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
        : '*Must contain 1 lowercase & uppercase letter, number and special character';
  } else {
    input.style.borderColor = '';
    error.textContent = '';
  }
}

phoneNumber.addEventListener('input', () => {
  validator(phoneNumber, phoneNumberError, phoneError);
});
password.addEventListener('input', () => {
  validator(password, passwordError, passError);
});

// MY PERSONAL THING

function passwordCheck() {
  if (!password.includes(/[0-9]/)) {
    console.log('WHY');
  }
}

password.addEventListener('input', () => {
  passwordCheck();
});
