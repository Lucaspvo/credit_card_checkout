import ProductsListItem from '../presentation/ProductsListItem.vue';

export default {

  name: "ProductsList",

  components: {

    ProductsListItem,

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
