<template>
  <textarea
    :value="initialValue"
    class="border-1 border-solid border-gray-border rounded-12 px-16 py-12 font-normal text-14 leading-16 w-full resize-none"
    @input="handleInput"
  />
</template>

<script>
import VModel from "../mixins/v-model";

export default {
  mixins: [VModel],
};
</script>
