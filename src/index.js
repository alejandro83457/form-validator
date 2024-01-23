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

generateDropDown();
