import BaseLabel from '../../presentation/BaseLabel';

export default {

  name: 'CreditCardDrawBack',

  props: [
    'form',
    'formInput',
  ],

  computed: {

    frontCard: function() {

      return [
        'ccv'
      ].includes(this.formInput);

    },

  },

  components: {

    'base-label': BaseLabel,

  }

};
