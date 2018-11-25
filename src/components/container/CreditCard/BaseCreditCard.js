import CreditCardForm from '../../presentation/CreditCard/CreditCardForm.vue';
import CreditCardDraw from '../../presentation/CreditCard/CreditCardDraw.vue';

export default {

  name: 'BaseCreditCard',

  components: {

    'credit-card-form': CreditCardForm,
    'credit-card-draw': CreditCardDraw,

  },

  data: function() {

    return {

      form: {

        cardHolder: '',

        cardNumber: '',

        yearExpiryDate: 'Year',

        monthExpiryDate: 'Month',

        ccv: '',

      },

      formInput: '',

      creditCardType: '',

    };

  },

  methods: {

    onChange(value, name) {

      if (name === 'type') {

        this.creditCardType = value;
        return;

      } else if (name === 'form') {

        this.form = {

          ...value,

        };
        this.formInput = '';
        this.creditCardType = '';
        return;

      }

      this.form[name] = value;

    },

    onClick(e) {

      this.formInput = e.target.name;

    },

    onFocus(e) {

      this.formInput = e.target.name;

    },

  },

};
