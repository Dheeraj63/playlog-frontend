<template>
  <form @submit.prevent="submit">
    <span
      v-if="errorMessage"
      class="bg-red-100 w-full block border-red-400 border-1 text-red-400 text-center mb-16 py-8 px-16 text-16"
    >
      {{ errorMessage }}
    </span>

    <slot />
  </form>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      required: true,
      validator: (value) => !!value,
    },
    formData: {
      type: Object,
      required: true,
      validator: (value) => Object.isExtensible(value),
    },
    method: {
      type: String,
      required: false,
      default: "get",
      validator: (value) => ["get", "post", "put", "delete"].includes(value),
    },
  },
  data() {
    return {
      response: null,
    };
  },
  computed: {
    errorCode() {
      return this.responseData && this.responseData.code ? this.responseData.code : null;
    },
    errorMessage() {
      return this.errorCode && this.responseData.message
        ? this.responseData.message
        : null;
    },
    responseData() {
      return this.response && this.response.data ? this.response.data : null;
    },
  },
  methods: {
    async submit() {
      const { method, action, formData } = this;

      try {
        this.response = await this.$axios[method](action, formData);

        this.$emit("success", this.responseData);
      } catch (e) {
        this.response = e.response;

        this.$emit("error", this.responseData);
      }
    },
  },
};
</script>
