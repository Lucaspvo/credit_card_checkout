import BaseInput from '../../presentation/BaseInput';
import BaseSelect from '../../presentation/BaseSelect';
import BaseButton from '../../presentation/BaseButton';
import BaseLabel from '../../presentation/BaseLabel';
import { upperCase, digitsOnly, charactersOnly } from '../../../utils/Formatters.js';
import formValidation from '../../../utils/FormValidation.js';

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

    upperCase,

    digitsOnly,

    charactersOnly,

    onSubmit(e) {

      e.preventDefault();

      const form = e.target.elements;

      this.errors = formValidation(form);
      this.validated = Object.keys(this.errors).length === 0 ? true : false;

      if (this.validated) {

        let timeoutId = setTimeout(() => {

          this.validated = false;

          this.$emit('onChange', {

            cardHolder: '',

            cardNumber: '',

            yearExpiryDate: 'Year',

            monthExpiryDate: 'Month',

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

    'base-input': BaseInput,
    'base-select': BaseSelect,
    'base-button': BaseButton,
    'base-label': BaseLabel,

  },

};
