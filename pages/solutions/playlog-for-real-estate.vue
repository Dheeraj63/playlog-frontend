<i18n lang="yaml">
en:
  page:
    title: Best Video Creation for Real Estate
  meta:
    description: "Find out how the real estate industry uses Playlog to create interactive property tours on the fly."
</i18n>

<template>
  <div>
    <div class="section-feature-header-vivid wf-section">
      <div class="wrap-heading hero-title">
        <div class="col-hero-title">
          <h2 class="heading---light">Solutions</h2>
          <h1 class="heading-hero">For Real Estate</h1>
        </div>
      </div>
    </div>
    <div class="section-5 wf-section">
      <div class="wrap-2 w50 _3-vids">
        <div class="content8-wrap">
          <div class="headline-8-col-2">
            <h2 class="black-text">Get inspired.</h2>
            <p class="text-16-2 text-16-60">
              Take a look at some of our favourite real estate content. See how you
              realtors can enhance their marketing collateral with mixed media.
            </p>
          </div>
        </div>
        <div>
          <div class="columns-2 w-row">
            <div class="w-col w-col-4"></div>
            <div class="column-5 w-col w-col-4">
              <div class="w-embed">
                <video
                  controls=""
                  controlslist="nodownload"
                  poster="https://production-2.nyc3.cdn.digitaloceanspaces.com/static_pages/07.16.2021-PL-Real-Estate-smaller.png"
                  width="100%"
                  height="100%"
                  style="background-color: #000"
                >
                  <source
                    src="https://production-2.nyc3.cdn.digitaloceanspaces.com/static_pages/07.16.2021-PL-Real-Estate-smaller.mp4"
                    type="video/mp4"
                  />
                  <img
                    src="https://production-2.nyc3.cdn.digitaloceanspaces.com/static_pages/07.16.2021-PL-Real-Estate-smaller.png"
                  />
                </video>
              </div>
            </div>
            <div class="w-col w-col-4"></div>
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
          type: "image/svg+xml",
          href: "/images/PlayBrush-Gradient-Colour-Overlays-02.svg",
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
