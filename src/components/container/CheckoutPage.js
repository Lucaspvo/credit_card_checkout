import ProductsList from '../presentation/ProductsList.vue';
import BaseCreditCard from '../presentation/BaseCreditCard.vue';

export default {

  name: 'CheckoutPage',

  components: {

    ProductsList,
    BaseCreditCard,

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

    };

  },

};
