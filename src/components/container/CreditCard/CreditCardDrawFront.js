import BaseLabel from '../../presentation/BaseLabel';

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

      if (this.form.monthExpiryDate === '' || this.form.monthExpiryDate === 'Month') return '';

      return this.form.monthExpiryDate.length < 2 ? `0${this.form.monthExpiryDate.toString()}` : this.form.monthExpiryDate;

    },

    formYearExpiryDate: function() {

      if (this.form.yearExpiryDate === '' || this.form.yearExpiryDate === 'Year') return '';

      return this.form.yearExpiryDate.slice(2,4);

    },

  },

  components: {

    'base-label': BaseLabel,

  }

};
