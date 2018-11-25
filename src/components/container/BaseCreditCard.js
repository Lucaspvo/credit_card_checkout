import CreditCardForm from '../presentation/CreditCardForm.vue';
import CreditCardDraw from '../presentation/CreditCardDraw.vue';

export default {

  name: 'BaseCreditCard',

  components: {

    CreditCardForm,
    CreditCardDraw,

  },

  data: function() {

    return {

      form: {

        cardHolder: '',

        cardNumber: '',

        yearExpiryDate: '',

        monthExpiryDate: '',

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
