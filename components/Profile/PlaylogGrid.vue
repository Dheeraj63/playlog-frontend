<template>
  <div class="playlog-grid">
    <div
      v-if="$fetchState.pending"
      class="relative flex flex-wrap"
      :class="['-mx-4 lg:-mx-f-8', 'lg:py-f-8']"
    >
      <GridCard v-for="key in loadingCount" :key="key" :loading="true" />
    </div>
    <div
      v-else-if="hasPlaylogs"
      class="relative flex flex-wrap"
      :class="['-mx-4 lg:-mx-f-8', 'lg:py-f-8']"
    >
      <GridCard
        v-for="playlog in playlogs"
        :key="playlog.uid"
        :playlog="playlog"
        @click="(data) => (playerData = data)"
      />

      <div
        v-if="playerData"
        class="absolute top-0 left-1/2 bottom-0 flex items-center justify-center min-w-min w-screen transform -translate-x-1/2 backdrop-filter z-8 bg-backdrop-opacity-33"
        :class="['py-10 lg:py-f-26', 'backdrop-blur-30 lg:backdrop-blur-f-30']"
        @click="playerData = null"
      >
        <div
          class="overflow-hidden"
          :class="['w-228 lg:w-f-346', 'rounded-5 lg:rounded-f-16']"
        >
          <SimplePlayer :playlog="playerData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GridCard from "./PlaylogList/GridCard";
import SimplePlayer from "~/components/Player/SimplePlayer";

import User from "~/mixins/user";

export default {
  components: { GridCard, SimplePlayer },
  mixins: [User],
  data() {
    return {
      response: null,
      playerData: null,
    };
  },
  async fetch() {
    try {
      this.response = await this.getPlaylogs({ limit: 12, sort_by: "pinned" });
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
      return Math.min(12, this.playlogCount);
    },
    playlogs() {
      return this.responseData && this.responseData.playlogs
        ? this.responseData.playlogs
        : null;
    },
  },
  methods: {
    click(e) {
      console.log(e);
    },
  },
  fetchOnServer: false,
};
</script>
