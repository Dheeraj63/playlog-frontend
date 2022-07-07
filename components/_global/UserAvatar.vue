<template>
  <img
    :src="photoUrlError ? photoUrl : defaultPhotoUrl"
    :class="{
      'bg-yellow-playlog': usingDefaultPhotoUrl,
    }"
    @error="error"
  />
</template>

<script>
import User from "~/mixins/user";

export default {
  mixins: [User],
  data() {
    return {
      photoUrlError: false,
    };
  },
  methods: {
    error() {
      if (!this.usingDefaultPhotoUrl) {
        this.photoUrlError = true;
      }
    },
  },
};
</script>
