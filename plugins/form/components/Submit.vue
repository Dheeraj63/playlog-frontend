<template>
  <button
    class="border-1 border-solid border-black rounded-full bg-black text-white px-16 py-12 font-normal text-14 font-bold leading-16 w-full"
    type="submit"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: "Submit",
      validator: (value) => !!value,
    },
  },
};
</script>
