<template>
  <div class="video-grid">
    <div
      v-if="$fetchState.pending"
      class="flex flex-col items-center justify-center"
      :class="['-mx-16 lg:-mx-f-8']"
    >
      <VideoCard v-for="key in loadingCount" :key="key" :loading="true" />
    </div>
    <div
      v-else-if="hasPlaylogs"
      class="flex flex-col items-center justify-center"
      :class="['-mx-16 lg:-mx-f-8']"
    >
      <VideoCard v-for="playlog in playlogs" :key="playlog.uid" :playlog="playlog" />
    </div>
  </div>
</template>

<script>
import VideoCard from "./PlaylogList/VideoCard";

import User from "~/mixins/user";

export default {
  components: { VideoCard },
  mixins: [User],
  data() {
    return {
      response: null,
    };
  },
  async fetch() {
    try {
      this.response = await this.getPlaylogs({ limit: 3, sort_by: "pinned" });
    } catch (e) {
      // do nothing, assume no playlogs
    }
  },
  computed: {
    hasPlaylogs() {
      return this.playlogs && this.playlogs.length;
    },
    responseData() {
      if (this.response && this.response.data) {
        if (this.response.data.data) {
          return this.response.data.data;
        }

        return this.response;
      }

      return null;
    },
    loadingCount() {
      return Math.min(3, this.playlogCount);
    },
    playlogs() {
      return this.responseData && this.responseData.playlogs
        ? this.responseData.playlogs
        : null;
    },
  },
  fetchOnServer: false,
};
</script>
