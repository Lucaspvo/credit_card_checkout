import BaseLabel from '../../presentation/BaseLabel';

export default {

  name: 'CreditCardDrawFront',

  props: [
    'form',
    'formInput',
    'creditCardType',
  ],

  computed: {

    /**
     * Function responsible for determining
     * the credit card draw should show its
     * front
     * @return {boolean} true or false wether the input being targted is included on array
     */
    frontCard: function() {

      return [
        'cardHolder',
        'cardNumber',
        'monthExpiryDate',
        'yearExpiryDate',
        ''
      ].includes(this.formInput);

    },

    /**
     * Function customize month's value for the
     * interface
     * @return {[type]} month expiry date modified (or not)
     */
    formMonthExpiryDate: function() {

      if (this.form.monthExpiryDate === '' || this.form.monthExpiryDate === 'Month') return '';

      return this.form.monthExpiryDate.length < 2 ? `0${this.form.monthExpiryDate.toString()}` : this.form.monthExpiryDate;

    },

    /**
     * Function customize year's value for the
     * interface
     * @return {[type]} year expiry date modified (or not)
     */
    formYearExpiryDate: function() {

      if (this.form.yearExpiryDate === '' || this.form.yearExpiryDate === 'Year') return '';

      return this.form.yearExpiryDate.slice(2,4);

    },

  },

  components: {

    'base-label': BaseLabel,

  }

};
