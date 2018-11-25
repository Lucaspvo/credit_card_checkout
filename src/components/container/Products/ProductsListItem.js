import BaseLabel from '../../presentation/BaseLabel';

export default {

  name: "ProductsListItem",

  props: [
    'product',
  ],

  computed: {

    /**
     * Computed value that truncate the product's description
     * in case it exceeds 20 characters
     * @return {string} string truncated
     */
    description: function() {

      return this.product.description.slice(0, 20) + '...';

    },

  },

  components: {

    'base-label': BaseLabel,

  },

};
