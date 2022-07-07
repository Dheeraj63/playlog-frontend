<template>
  <div class="playlog-app w-full mx-auto min-w-min" :class="['max-w-max sm:max-w-full']">
    <nuxt />

    <footer
      class="flex items-center justify-center w-full"
      :class="['mt-16 lg:mt-32', 'px-16 lg:px-f-16', 'py-20 lg:py-32']"
    >
      <nuxt-link :to="localePath('/')">
        <img
          src="~/static/logos/playlog.svg"
          :class="['w-100 lg:w-f-206', 'h-20 lg:h-42']"
        />
      </nuxt-link>
    </footer>
  </div>
</template>

<script>
export default {};
</script>
