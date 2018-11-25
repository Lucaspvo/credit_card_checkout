import CreditCardDrawFront from '../presentation/CreditCardDrawFront';
import CreditCardDrawBack from '../presentation/CreditCardDrawBack';

export default {

  name: 'CreditCardDraw',

  props: [
      'form',
      'formInput',
      'creditCardType',
  ],

  components: {

    CreditCardDrawFront,
    CreditCardDrawBack,

  },

};
