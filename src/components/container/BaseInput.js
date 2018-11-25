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

      dataField: '',

    };

  },

  methods: {

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

    pasteEvent(e) {

      e.preventDefault();
      e.stopPropagation();

      this.$refs.input.value = this.dataField = this.onPaste(e.clipboardData.getData('text'));
      this.$emit('onChange', this.$refs.input.value, e.target.name);

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
