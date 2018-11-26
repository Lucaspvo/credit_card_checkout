import CreditCardDrawFront from '../../presentation/CreditCard/CreditCardDrawFront';
import CreditCardDrawBack from '../../presentation/CreditCard/CreditCardDrawBack';

export default {

  name: 'CreditCardDraw',

  props: {

    'form': Object,
    'formInput': String,
    'creditCardType': String,

  },

  components: {

    'credit-card-draw-front': CreditCardDrawFront,
    'credit-card-draw-back': CreditCardDrawBack,

  },

};
