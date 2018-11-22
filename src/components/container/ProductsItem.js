export default {

  name: "ProductsItem",

  props: [
    'product',
  ],

  computed: {

    description: function() {

      return this.product.description.slice(0, 20) + '...';

    },

  },

};
