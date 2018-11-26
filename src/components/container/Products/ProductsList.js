import ProductsListItem from '../../presentation/Products/ProductsListItem.vue';

export default {

  name: "ProductsList",

  components: {

    'products-list-item': ProductsListItem,

  },

  props: {

    'products': Array,

  },

  computed: {

    /**
     * Computed value to sum each product's price
     * and return the total
     * @return {float} sum of all product's prices
     */
    totalPrice: function() {

      return this.products.reduce((sum, product) => sum + parseFloat(product.price), 0.00).toFixed(2);

    },

  },

};
