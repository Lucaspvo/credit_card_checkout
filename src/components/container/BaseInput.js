export default {

  name: 'BaseInput',

  props: ['value', 'formatter', 'mask', 'maxLength', 'placeholder'],

  data: function() {

    return {

      dataValue: this.value,

    };

  },

  methods: {

    inputChange: function(e) {

      const functions = { ...this.formatter, ...this.mask };

      for (let func in functions) {

        if (functions.hasOwnProperty(func)) {

          const funcValue = functions[func](e.target.value);

          this.$refs.input.value = this.dataValue = funcValue;

        }

      }

    },

  },

};
