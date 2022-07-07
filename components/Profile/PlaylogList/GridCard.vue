<template>
  <div class="w-1/3 flex items-center justify-center" :class="['p-4 lg:p-f-8']">
    <component
      :is="loading ? 'span' : 'button'"
      class="relative block w-full pt-full"
      :class="[
        'rounded-10 lg:rounded-f-10',
        isPinned || loading ? 'bg-gray-700' : 'bg-gray-200',
      ]"
      :style="thumbnailXl ? `background-image: url('${thumbnailXl}')` : 'undefined'"
      @click="loading ? undefined : $emit('click', playlog)"
    >
      <span
        v-if="isPinned"
        class="absolute left-1/2 bottom-0 transform -translate-x-1/2 block text-white bg-indigo-playlog shadow-button"
        :class="[
          'mb-6 lg:mb-f-16',
          'px-6 lg:px-f-16',
          'py-1 lg:py-f-2',
          'text-10 lg:text-f-14 ',
          'leading-12 lg:leading-f-20',
          'rounded-4 lg:rounded-f-2',
        ]"
        >Pinned</span
      >
    </component>
  </div>
</template>

<script>
import Playlog from "~/mixins/playlog";

export default {
  mixins: [Playlog],
};
</script>
