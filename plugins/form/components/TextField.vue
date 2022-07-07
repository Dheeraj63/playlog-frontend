<template>
  <input
    ref="input"
    :value="initialValue"
    class="border-1 border-solid border-gray-border rounded-full px-16 py-12 font-normal text-14 leading-16 w-full"
    @input="handleInput"
  />
</template>

<script>
import VModel from "../mixins/v-model";

export default {
  mixins: [VModel],
};
</script>
