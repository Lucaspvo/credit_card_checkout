import ProductsList from '../presentation/Products/ProductsList.vue';
import BaseCreditCard from '../presentation/CreditCard/BaseCreditCard.vue';
import BaseLabel from '../presentation/BaseLabel.vue';

export default {

  name: 'CheckoutPage',

  components: {

    'products-list': ProductsList,
    'base-credit-card': BaseCreditCard,
    'base-label': BaseLabel,

  },

  data: function() {

    return {

      products: [

        {

          img: 'brain-color-colorful.png',
          title: 'Magic Cube',
          price: '30.00',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, ex sed gravida rhoncus, enim mauris pellentesque velit, vel interdum diam tellus iaculis leo.',

        },

        {

          img: 'cactus-desk-flatlay.png',
          title: 'Mini Cactus',
          price: '50.25',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, ex sed gravida rhoncus, enim mauris pellentesque velit, vel interdum diam tellus iaculis leo.',

        },

        {

          img: 'abstract-art-background.png',
          title: 'Toy Car (Classic Edition)',
          price: '22.19',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, ex sed gravida rhoncus, enim mauris pellentesque velit, vel interdum diam tellus iaculis leo.',

        },

      ],

      successPurchase: false,

    };

  },

  methods: {

    /**
     * Function to handle onChange event
     * to make necessary changes on its state
     * @param  {string} value value from the input
     * @param  {string} name  name from the input
     * @return {undefined}    default return called at the end
     */
    onChange(value, name) {

      if (name === 'validated') {

        setTimeout(() => {

          this.successPurchase = value;
          setTimeout(() => {

            this.successPurchase = false;

          }, 10000);

        }, 1000);

      }

    },

  },

};
