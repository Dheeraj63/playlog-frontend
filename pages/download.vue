<i18n lang="yaml">
en:
  page:
    title: Free Download
  meta:
    description: "Download the latest version of the Playlog app for free. Available on iOS!"
</i18n>

<template>
  <div>
    <div class="section-feature-header wf-section">
      <div class="wrap-heading hero-title download-page">
        <div class="col-hero-title">
          <h2 class="heading---light">Download Playlog</h2>
          <h1 class="heading-hero">Reserve your handle today!</h1>
          <div class="download-links-wrap">
            <div class="button-wrap"></div>
            <a
              href="https://apps.apple.com/ca/app/playlog/id1374482722"
              target="_blank"
              class="w-inline-block"
              ><img
                src="/images/app-store.svg"
                loading="lazy"
                width="153"
                alt=""
                class="image-6"
            /></a>
            <!-- a href="https://play.google.com/store/apps/details?id=com.playlog.playlog" target="_blank" class="w-inline-block"><img src="/images/play-store.svg" loading="lazy" width="168" alt="" class="image-6"></a -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from "~/mixins/meta";

export default {
  mixins: [Meta],
  data() {
    return {
      link: [
        {
          rel: "preload",
          as: "image",
          href: "/images/Group-73.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "~/static/css/normalize.css";
@import "~/static/css/webflow.css";
@import "~/static/css/playlog.webflow.css";
</style>
