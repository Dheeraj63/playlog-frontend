<template>
  <div class="utility-page-wrap">
    <div class="utility-page-content w-form">
      <img src="/images/PlayLog_appicon_1080-1.svg" alt="" width="100" />
      <h2 class="black-text" style="padding-left: 0">Page Not Found</h2>
      <div>
        Uh oh, we can&#x27;t seem to find the page you&#x27;re looking for. Contact our
        <nuxt-link :to="localePath('/support/contact')">support</nuxt-link>.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
};
</script>

<style scoped>
@import "~/static/css/normalize.css";
@import "~/static/css/webflow.css";
@import "~/static/css/playlog.webflow.css";
</style>
