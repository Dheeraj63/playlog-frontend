<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :style="styles"
  >
    <path
      d="M18,2A16,16,0,0,0,2,18V33.8a.2.2,0,0,0,.352.129c4.2-4.084,7.976-1.885,7.976-1.885h0A16,16,0,1,0,18,2Zm0,
        24a8,8,0,1,1,8-8A8,8,0,0,1,18,26Z"
      transform="translate(-2 -2)"
      fill="currentColor"
    />
  </svg>
</template>

<script>
import Icon from "~/mixins/icon";

export default {
  mixins: [Icon],
  props: {
    viewBox: {
      type: String,
      required: false,
      default: "0 0 32 32",
    },
  },
};
</script>
