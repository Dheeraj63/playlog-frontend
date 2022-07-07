<template>
  <div
    class="simple-player h-full w-full relative flex items-center justify-center"
    @click.stop
  >
    <video
      v-if="rawStitchedVideoUrl && cardUrl && canplay !== false"
      ref="video"
      :controls="controls"
      :poster="cardUrl"
      playsinline
      class="h-full w-full"
      @loadedmetadata="canplay = true"
      @pause="paused = true"
      @play="paused = false"
    >
      <source :src="rawStitchedVideoUrl" type="video/mp4" @error="canplay = false" />
      <img :src="cardUrl" class="max-w-full max-h-full" />
    </video>
    <img v-else-if="cardUrl" :src="cardUrl" class="max-w-full max-h-full" />

    <button
      v-if="showOverlay"
      class="absolute top-0 left-0 right-0 bottom-0 z-1"
      @click="$refs.video.play()"
    >
      <div
        class="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black-opacity-50 text-white border-solid border-white-opacity-20 rounded-full"
        :class="['h-60 lg:h-f-126', 'w-60 lg:w-f-126', 'border-1 lg:border-f-1']"
      >
        <div
          class="flex items-center justify-end"
          :class="['h-40 lg:h-f-86', 'w-26 lg:w-f-60']"
        >
          <Play :class="['h-30 lg:h-f-66', 'w-22 lg:w-f-46']" />
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import Play from "~/static/icons/play.svg?inline";

import Playlog from "~/mixins/playlog";

export default {
  components: { Play },
  mixins: [Playlog],
  data() {
    return {
      canplay: null,
      paused: true,
    };
  },
  computed: {
    controls() {
      return this.canplay && !this.paused ? "controls" : undefined;
    },
    showOverlay() {
      return this.canplay && this.paused;
    },
  },
};
</script>
