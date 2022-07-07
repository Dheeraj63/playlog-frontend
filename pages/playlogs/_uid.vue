<template>
  <div>
    <Player v-if="playlog" :playlog="playlog" />
    <div v-else>Not found</div>
  </div>
</template>

<script>
export default {
  layout: "app",
  async asyncData({ $axios, params, error }) {
    try {
      const response = await $axios.get(`playlogs/${params.uid}`);

      return { response: response.data };
    } catch (err) {
      const response = err.response;

      error({ statusCode: response.status, message: response.data.message });
    }
  },
  data() {
    return {
      response: null,
    };
  },
  computed: {
    responseData() {
      if (this.response && this.response.data) {
        if (this.response.data.data) {
          return this.response.data.data;
        }

        return this.response.data;
      }

      return null;
    },
    playlog() {
      return this.responseData && this.responseData.playlog
        ? this.responseData.playlog
        : null;
    },
    uid() {
      return this.$route.params.uid;
    },
  },
};
</script>
