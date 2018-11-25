export default {

  name: 'BaseInput',

  props: [
    'dataValue',
    'formatter',
    'mask',
    'maxLength',
    'placeholder',
    'error',
    'onPaste',
    'inputValidated'
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
     * Function to handle data on input event,
     * analyze it and save it on its data and
     * emit event to parent component
     * @param  {object} e element being targeted
     * @return {undefined]}   default return called at the end
     */
    inputChange: function(e) {

      const functions = this.formatter;

      if (Object.keys(functions).length > 0) {

        for (let func in functions) {

          if (functions.hasOwnProperty(func)) {

            const funcValue = functions[func](e.target.value, e);

            this.$refs.input.value = this.dataField = funcValue;

          }

        }

        this.$emit('onChange', this.$refs.input.value, e.target.name);

        return;

      }

      this.dataField = e.target.value;
      this.$emit('onChange', e.target.value, e.target.name);

    },

    /**
     * Function to handle paste event on input,
     * analyze it and make the necessary changes.
     * Also emitting event to parent component
     * @param  {object} e element being targeted
     * @return {undefined]}   default return called at the end
     */
    pasteEvent(e) {

      e.preventDefault();
      e.stopPropagation();

      this.$refs.input.value = this.dataField = this.onPaste(e.clipboardData.getData('text'));
      this.$emit('onChange', this.$refs.input.value, e.target.name);

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
