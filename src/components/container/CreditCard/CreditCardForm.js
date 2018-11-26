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

    /**
     * Submition of credit card checkout form
     * @param  {object} e element tagged (in this case "form")
     * @return {undefined}   default return called at the end
     */
    onSubmit(e) {

      e.preventDefault();

      const form = e.target.elements;

      this.errors = formValidation(form);

      if (Object.keys(this.errors).length === 0) {

        this.validated = true;
        this.$emit('onChange', this.validated, 'validated');

      }

      if (this.validated) {

        setTimeout(() => {

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

    /**
     * Listen for a change event from child component,
     * changing its data and emiting new events to parent
     * component
     * @param  {string} value value of the field being changed
     * @param  {string} name  name of the field being changed
     * @return {undefined}       default return called at the end
     */
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

    /**
     * Listen for a click event from child component,
     * emiting new event to parent component
     * @param  {object} e element tagged
     * @return {undefined}   default return called at the end
     */
    onClick(e) {

      this.$emit('onClick', e);

    },

    /**
     * Listen for a focus event from child component,
     * emiting new event to parent component
     * @param  {object} e element tagged
     * @return {undefined}   default return called at the end
     */
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
