import BaseLabel from '../../presentation/BaseLabel';

export default {

  name: "ProductsListItem",

  props: [
    'product',
  ],

  computed: {

    description: function() {

      return this.product.description.slice(0, 20) + '...';

    },

  },

  components: {

    'base-label': BaseLabel,

  },

};
