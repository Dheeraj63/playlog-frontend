<template>
  <div class="h-screen w-full relative">
    <div class="h-full w-full flex items-center justify-center bg-white">
      <video
        v-if="videoSrc && card && canplay !== false"
        :controls="controls"
        :poster="card"
        autoplay
        playsinline
        class="h-full w-full"
        @loadedmetadata="canplay = true"
      >
        <source :src="videoSrc" type="video/mp4" @error="canplay = false" />
        <img :src="card" class="max-w-full max-h-full" />
      </video>
      <img v-else-if="card" :src="card" class="max-w-full max-h-full" />
    </div>

    <div
      v-if="card"
      class="absolute top-0 right-0 w-64 mr-12 mt-12 text-14 text-white bg-black-opacity-30 rounded-10"
    >
      <nuxt-link
        :to="localePath('/')"
        class="w-full p-6 my-6 flex flex-col items-center justify-center"
      >
        <PlaylogLogo class="h-40 w-40 mb-4" />
        <span class="button-label"> Home </span>
      </nuxt-link>

      <nuxt-link
        v-if="user.photo_url"
        :to="localePath(`/@${user.name}`)"
        class="p-6 my-6 flex flex-col items-center justify-center"
      >
        <img
          :src="user.photo_url"
          :alt="`${user.name}'s Avatar`"
          :title="`${user.name}'s Avatar`"
          class="h-40 w-40 rounded-5 mb-4"
        />
        <span class="button-label"> @{{ user.name }} </span>
      </nuxt-link>

      <button
        class="w-full p-6 my-6 flex flex-col items-center justify-center"
        title="Download the Playlog App"
        @click="downloadApp"
      >
        <nuxt-picture
          src="/img/playlog-logo-email.png"
          :img-attrs="{ class: 'h-40 w-40 mb-4' }"
        />
        <span class="button-label"> App </span>
      </button>

      <a
        v-if="canplay && src"
        :href="src"
        class="w-full p-6 my-6 flex flex-col items-center justify-center"
        title="Download video"
        :download="videoFilename"
      >
        <Download class="h-40 w-40 mb-4" />
        <span class="button-label mt-0"> Video </span>
      </a>
    </div>
  </div>
</template>

<script>
import Download from "~/components/icons/Download";
import PlaylogLogo from "~/components/icons/PlaylogLogo";

export default {
  components: { Download, PlaylogLogo },
  props: {
    playlog: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      canplay: null,
      src: "....",
      videoFilename: "asdfasdfasdf",
    };
  },
  computed: {
    card() {
      return this.playlog ? this.playlog.card_url : null;
    },
    controls() {
      return this.canplay ? "controls" : undefined;
    },
    videoSrc() {
      return this.playlog ? this.playlog.raw_stitched_video_url : null;
    },
    user() {
      return this.playlog.user ? this.playlog.user : null;
    },
  },
  methods: {
    downloadApp() {},
  },
};
</script>
