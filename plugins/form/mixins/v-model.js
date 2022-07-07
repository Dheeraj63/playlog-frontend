export default {
  props: {
    initialValue: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
}
