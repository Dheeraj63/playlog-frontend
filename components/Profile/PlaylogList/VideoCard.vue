<template>
  <div
    class="flex items-center justify-center mb-16"
    :class="[
      'w-228 lg:w-f-364',
      'min-h-404 lg:min-h-f-646',
      loading || isPinned ? 'bg-gray-700' : 'bg-gray-200',
    ]"
  >
    <div
      v-if="loading"
      class="relative block w-full h-full"
      :class="['rounded-5 lg:rounded-f-20', isPinned ? 'bg-gray-700' : 'bg-gray-200']"
    />

    <SimplePlayer
      v-else
      :playlog="playlog"
      :class="[isPinned ? 'bg-gray-700' : 'bg-gray-200']"
    />
  </div>
</template>

<script>
import SimplePlayer from "~/components/Player/SimplePlayer";
import Playlog from "~/mixins/playlog";

export default {
  components: { SimplePlayer },
  mixins: [Playlog],
};
</script>
