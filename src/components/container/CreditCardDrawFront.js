export default {

  name: 'CreditCardDrawFront',

  props: [
    'form',
    'formInput',
    'creditCardType',
  ],

  computed: {

    frontCard: function() {

      return [
        'cardHolder',
        'cardNumber',
        'monthExpiryDate',
        'yearExpiryDate',
        ''
      ].includes(this.formInput);

    },

    formMonthExpiryDate: function() {

      if (this.form.monthExpiryDate === '') return this.form.monthExpiryDate;

      return this.form.monthExpiryDate.length < 2 ? `0${this.form.monthExpiryDate.toString()}` : this.form.monthExpiryDate;

    },

    formYearExpiryDate: function() {

      return this.form.yearExpiryDate.slice(2,4);

    },

  },

};
