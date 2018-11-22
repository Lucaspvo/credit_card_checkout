import ProductsItem from '../presentation/ProductsItem.vue';

export default {

  name: "ProductsList",

  components: {

    ProductsItem,

  },

  props: [
    'products',
  ],

  computed: {

    totalPrice: function() {

      return this.products.reduce((sum, product) => sum + parseFloat(product.price), 0.00).toFixed(2);

    },

  },

};
