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

// checks if email is set up properly
const checkEmail = () => {
  const email = document.querySelector('#email');
  email.addEventListener('input', () => {
    if (!email.checkValidity()) {
      email.setAttribute('class', 'error');
      email.reportValidity();
    } else {
      email.removeAttribute('class', 'error');
    }
  });
};

// will check only on form submission
const checkCountryOnce = () => {
  const country = document.querySelector('#country');
  if (country.value === 'Select country') {
    country.setCustomValidity('You must choose a country!');
    country.setAttribute('class', 'error');
  } else {
    country.setCustomValidity('');
    country.removeAttribute('class', 'error');
  }
};

// will keep checking after incorrect form submission
const checkCountry = () => {
  const country = document.querySelector('#country');
  country.addEventListener('change', () => {
    if (country.value === 'Select country') {
      country.setCustomValidity('You must choose a country!');
      country.setAttribute('class', 'error');
      country.reportValidity();
    } else {
      country.setCustomValidity('');
      country.removeAttribute('class', 'error');
    }
  });
};

const checkZIP = () => {
  const zip = document.querySelector('#zip');
  zip.addEventListener('input', () => {
    if (!zip.checkValidity()) {
      zip.setAttribute('class', 'error');
      zip.reportValidity();
    } else {
      zip.removeAttribute('class', 'error');
    }
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
      confirm.reportValidity();
    } else {
      confirm.setCustomValidity('');
      password.removeAttribute('class', 'error');
      confirm.removeAttribute('class', 'error');
    }
  });
};

// template function to check if an element is valid
const isValid = (el) => {
  if (!el.checkValidity()) {
    el.setAttribute('class', 'error');
  } else {
    el.removeAttribute('class', 'error');
  }
};

// will check if all input elements are valid or not.
const validate = () => {
  const submit = document.querySelector('#submit');
  const email = document.querySelector('#email');
  const zip = document.querySelector('#zip');
  const password = document.querySelector('#password');
  const confirm = document.querySelector('#confirm');

  submit.addEventListener('click', () => {
    isValid(email);
    checkCountryOnce();
    isValid(zip);
    isValid(password);
    isValid(confirm);
  });
};

const submitForm = () => {
  const form = document.querySelector('form');
  const congrats = document.querySelector('#congrats');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    congrats.textContent = '👏🏻';
  });
};

// one-time calls
generateDropDown();
checkEmail();
checkCountry();
checkZIP();
checkPasswords();
validate();
submitForm();
