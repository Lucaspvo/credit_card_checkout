export default {

  name: 'BaseSelect',

  props: [
    'dataValue',
    'options',
  ],

  data: function() {

    return {

      dataField: this.dataValue,

    };

  },

  watch: {

    dataValue(value) {

      this.dataField = value;

    },

  },

  methods: {

    onChange(e) {

      e.preventDefault();
      e.stopPropagation();

      this.$emit('onChange', e.target.value, e.target.name);

    },

    onClick(e) {

      e.preventDefault();
      e.stopPropagation();

      this.$emit('onClick', e);

    },

    onFocus(e) {

      e.preventDefault();
      e.stopPropagation();

      this.$emit('onFocus', e);

    },

  },

};
