export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'currentColor',
    },
    opacity: {
      type: Number,
      required: false,
      default: null,
      validator: value => value >= 0 && value <= 1,
    },
    height: {
      type: [Number, String],
      required: false,
      default: 24,
    },
    width: {
      type: [Number, String],
      required: false,
      default: 24,
    },
    viewBox: {
      type: String,
      required: false,
      default: '0 0 24 24',
    },
  },
  computed: {
    styles() {
      return {
        color: this.color,
        opacity: this.opacity,
      };
    },
  },
};
