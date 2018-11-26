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

    /**
     * Listen for a change event from child component,
     * changing its data and emiting new events to parent
     * component
     * @param  {string} value value of the field being changed
     * @param  {string} name  name of the field being changed
     * @return {undefined}       default return called at the end
     */
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

      if (name === 'cardNumber' && value === '') {

        this.creditCardType = '';

      }

      if (name === 'validated') {

        this.$emit('onChange', value, name);

      }

      this.form[name] = value;

    },

    /**
     * Listen for a click event from child component and
     * changing its data
     * @param  {object} e element tagged
     * @return {undefined}   default return called at the end
     */
    onClick(e) {

      this.formInput = e.target.name;

    },

    /**
     * Listen for a focus event from child component and
     * changing its data
     * @param  {object} e element tagged
     * @return {undefined}   default return called at the end
     */
    onFocus(e) {

      this.formInput = e.target.name;

    },

  },

};
