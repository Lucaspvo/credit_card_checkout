import ProductsListItem from '../../presentation/Products/ProductsListItem.vue';

export default {

  name: "ProductsList",

  components: {

    'products-list-item': ProductsListItem,

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
