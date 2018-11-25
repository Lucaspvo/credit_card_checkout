export default {

  name: 'BaseSelect',

  props: ['options'],

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
