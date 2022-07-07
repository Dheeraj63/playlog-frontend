<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 overflow-auto bg-transparent"
    :class="{ hidden: !visible }"
  >
    <div
      class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"
      :class="backdropClass"
      @click.stop="$modal.hide(name)"
    />

    <div
      class="absolute top-1/2 left-1/2 p-24 w-max max-w-full transform -translate-x-1/2 -translate-y-1/2"
      :class="contentContainerClass"
    >
      <div class="w-full h-full p-48 rounded-12 bg-white" :class="contentClass">
        <span class="block text-48 leading-56 mb-24 text-center font-thin uppercase"
          >Playlog</span
        >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      validator: (value) => !!value,
    },
    backdropClass: {
      type: [String, Array],
      required: false,
      default: "",
    },
    contentContainerClass: {
      type: [String, Array],
      required: false,
      default: "",
    },
    contentClass: {
      type: [String, Array],
      required: false,
      default: "",
    },
    showOnLoad: {
      type: Boolean,
      required: false,
      default: false,
    },
    showHeading: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      visible: this.showOnLoad,
    };
  },
  created() {
    this.$modal.$on("show", this.name, this.show);
    this.$modal.$on("hide", this.name, this.hide);
  },
  destroyed() {
    this.$modal.$on("show", this.name, this.show);
    this.$modal.$on("hide", this.name, this.hide);
  },
  methods: {
    hide() {
      if (this.visible) {
        this.visible = false;
      }
    },
    show() {
      if (!this.visible) {
        this.visible = true;
      }
    },
  },
};
</script>
