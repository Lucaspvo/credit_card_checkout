import BaseInput from '../presentation/BaseInput';
import BaseSelect from '../presentation/BaseSelect';
import BaseButton from '../presentation/BaseButton';

export default {

  name: 'CreditCardForm',

  data: function() {

    return {

        months: ['Month','1','2','3','4','5','6','7','8','9','10','11','12'],

        form: {

          cardHolder: '',

          cardNumber: '',

          expiryDateYear: '',

          expiryDateMonth: '',

          ccv: '',

        },

        errors: {

          styles: {},

          messages: {},

        },

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

    maskCreditCardNumber(value) {

      return value.length === 4 || value.length === 9 || value.length === 14 ? value + " " : value;

    },

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

      console.log(e.target.elements.cardHolder.value === '');

      const form = e.target.elements;

      const errors = {};

      if (form.cardHolder.value === '') {

        errors.cardHolder = 'Field required!';

      }

      this.errors = errors;

    }

  },

  components: {

    BaseInput,
    BaseSelect,
    BaseButton,

  },

};
