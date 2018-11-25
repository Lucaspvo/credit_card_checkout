import BaseLabel from '../../presentation/BaseLabel';

export default {

  name: 'CreditCardDrawBack',

  props: [
    'form',
    'formInput',
  ],

  computed: {

    /**
     * Function responsible for determining
     * the credit card draw should show its
     * back
     * @return {boolean} true or false wether the input being targted is included on array
     */
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
