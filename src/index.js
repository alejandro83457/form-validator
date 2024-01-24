import countries from './countries.json';

// populates drop down with all countries
const generateDropDown = () => {
  const dropDown = document.querySelector('#country');
  countries.forEach((country) => {
    const option = document.createElement('option');
    option.value = country.code;
    option.text = country.name;
    dropDown.appendChild(option);
  });
};

// check if both passwords match
const checkPasswords = () => {
  const password = document.querySelector('#password');
  const confirm = document.querySelector('#confirm');

  confirm.addEventListener('input', () => {
    if (password.value !== confirm.value) {
      confirm.setCustomValidity('Passwords need to match!');
      password.setAttribute('class', 'error');
      confirm.setAttribute('class', 'error');
    } else {
      confirm.setCustomValidity('');
      password.removeAttribute('class', 'error');
      confirm.removeAttribute('class', 'error');
    }
  });
};

const isValid = (el) => {
  if (!el.checkValidity()) {
    el.setAttribute('class', 'error');
  } else {
    el.removeAttribute('class', 'error');
  }
};

const validate = () => {
  const submit = document.querySelector('#submit');
  const email = document.querySelector('#email');
  const zip = document.querySelector('#zip');
  const password = document.querySelector('#password');
  const confirm = document.querySelector('#confirm');

  submit.addEventListener('click', () => {
    isValid(email);
    isValid(zip);
    isValid(password);
    isValid(confirm);
  });
};

generateDropDown();
checkPasswords();
validate();
