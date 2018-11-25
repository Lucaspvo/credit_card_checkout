const valid = require('card-validator');

export default function(form) {

  const errors = {};

  if (form.cardHolder.value === '') {

    errors.cardHolder = 'Field required';

  } else if (!/^[a-zA-Z\s]+$/.test(form.cardHolder.value)) {

    errors.cardHolder = 'Must contain only characters';

  } else if (!/^[a-zA-Z]+\s[a-zA-Z\s]+$/.test(form.cardHolder.value)) {

    errors.cardHolder = 'Provide Full Name (as in your credit card)';

  }

  let numberValidation = valid.number(form.cardNumber.value);

  console.log(numberValidation);

  if (form.cardNumber.value === '') {

    errors.cardNumber = 'Field required';

  } else if (!/^[0-9\s]+$/.test(form.cardNumber.value)) {

    errors.cardNumber = 'Must contain only digits';

  } else if (form.cardNumber.value.length < 16) {

    errors.cardNumber = 'Number must contain 13-16 digits';

  } else if (!numberValidation.isValid) {

    errors.cardNumber = 'Invalid credit card number';

  } else if (!/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{2,4}$/.test(form.cardNumber.value)) {

    errors.cardNumber = 'Number must be formatted as 9999 9999 9999 99##';

  }

  if (form.monthExpiryDate.value === 'Month') {

    errors.monthExpiryDate = 'Required';

  }

  if (form.yearExpiryDate.value === 'Year') {

    errors.yearExpiryDate = 'Required';

  }

  if (form.monthExpiryDate.value !== 'Month' &&
  form.yearExpiryDate.value !== 'Year') {

    let expiryDateValidation = valid.expirationDate(`${form.monthExpiryDate.value}/${form.yearExpiryDate.value}`);

    if (!expiryDateValidation.isValid) {

      errors.monthExpiryDate = 'Invalid expiry date';
      errors.yearExpiryDate = 'Invalid expiry date';

    }

  }

  let expiryDateValidation = valid.cvv(form.ccv.value);

  if (form.ccv.value === '') {

    errors.ccv = 'Field required';

  } else if (!/^[0-9\s]+$/.test(form.ccv.value)) {

    errors.ccv = 'Must contain only digits';

  } else if (!/^[0-9]{3}$/.test(form.ccv.value)) {

    errors.ccv = 'Number must be formatted as 999';

  } else if (form.cardNumber.value.length < 3) {

    errors.ccv = 'Number must contain 3 digits';

  } else if (!expiryDateValidation.isValid) {

    errors.ccv = 'Invalid CCV';

  }

  return errors;

}
