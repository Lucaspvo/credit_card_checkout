import BaseInput from '../presentation/BaseInput';
import BaseSelect from '../presentation/BaseSelect';
import BaseButton from '../presentation/BaseButton';
import BaseLabel from '../presentation/BaseLabel';

const valid = require('card-validator');

export default {

  name: 'CreditCardForm',

  props: [
    'form'
  ],

  data: function() {

    return {

        months: ['Month','1','2','3','4','5','6','7','8','9','10','11','12'],

        errors: {

          cardHolder: false,

          cardNumber: false,

          monthExpiryDate: false,

          yearExpiryDate: false,

          ccv: false,

        },

        validated: false,

    };

  },

  computed: {

    years: function() {

      return (new Array(51))
      .fill((new Date())
      .getFullYear())
      .map((elem, index) => index !== 0 ? elem + index - 1 : 'Year');

    },

  },

  methods: {

    upperCase(value) {

      return value.toUpperCase();

    },

    digitsOnly(value) {

      return value.replace(/[^0-9\s]/gi, '');

    },

    charactersOnly(value) {

      return value.replace(/[^a-z\s]/gi, '');

    },

    onSubmit(e) {

      e.preventDefault();

      const form = e.target.elements;

      const errors = {};

      if (form.cardHolder.value === '') {

        errors.cardHolder = 'Field required';

      } else if (!/^[a-zA-Z\s]+$/.test(form.cardHolder.value)) {

        errors.cardHolder = 'Must contain only characters';

      } else if (!/^[a-zA-Z]+\s[a-zA-Z\s]+$/.test(form.cardHolder.value)) {

        errors.cardHolder = 'Provide Full Name (as in your credit card)';

      }

      let numberValidation = valid.number(form.cardNumber.value);

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

      this.errors = errors;
      this.validated = Object.keys(errors).length === 0 ? true : false;

      if (this.validated) {

        let timeoutId = setTimeout(() => {

          this.validated = false;

          this.$emit('onChange', {

            cardHolder: '',

            cardNumber: '',

            yearExpiryDate: '',

            monthExpiryDate: '',

            ccv: '',

          }, 'form');

        }, 2000);

      }

    },

    onChange(value, name) {

      if (name === 'cardNumber' && value.length > 0) {

        let numberValidation = valid.number(value);

        if (!numberValidation.isPotentiallyValid) {

          this.errors = {

            ...this.errors,
            cardNumber: 'Invalid credit card number'

          };

          this.$emit('onChange', '____', 'type');

        } else {

          const niceType = numberValidation.card !== null ? numberValidation.card.niceType.toUpperCase() : '____';
          this.errors.cardNumber = undefined;
          this.$emit('onChange', niceType, 'type');

        }

      }

      this.$emit('onChange', value, name);

    },

    onClick(e) {

      this.$emit('onClick', e);

    },

    onFocus(e) {

      this.$emit('onFocus', e);

    },

  },

  components: {

    BaseInput,
    BaseSelect,
    BaseButton,
    BaseLabel,

  },

};
