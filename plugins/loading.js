import Vue from 'vue'

Vue.mixin({
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
