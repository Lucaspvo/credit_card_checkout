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

    /**
     * Function to handle data on change event and
     * emit event to parent component
     * @param  {object} e element being targeted
     * @return {undefined]}   default return called at the end
     */
    onChange(e) {

      e.preventDefault();
      e.stopPropagation();

      this.$emit('onChange', e.target.value, e.target.name);

    },

    /**
     * Function to handle click event on input and
     * emit event to parent component
     * @param  {object} e element being targeted
     * @return {undefined}   default return called at the end
     */
    onClick(e) {

      e.preventDefault();
      e.stopPropagation();

      this.$emit('onClick', e);

    },

    /**
     * Function to handle focus event on input and
     * emit event to parent component
     * @param  {object} e element being targeted
     * @return {undefined}   default return called at the end
     */
    onFocus(e) {

      e.preventDefault();
      e.stopPropagation();

      this.$emit('onFocus', e);

    },

  },

};
