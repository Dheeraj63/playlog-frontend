<i18n lang="yaml">
en:
  page:
    title: Agencies
  meta:
    description: "Monetization made possible through Playlog videos."
</i18n>

<template>
  <div>
    <div class="page-header-bg---black-edges gradient-bg---o-p-b wf-section">
      <div class="wrap-heading hero-title">
        <div class="col-hero-title">
          <h2 class="heading---light">Agencies</h2>
          <h1 class="heading-hero">Monetization<br />through video</h1>
        </div>
      </div>
    </div>
    <div id="compose" class="section-6 wf-section">
      <div class="wrap-2 w50">
        <div class="features-wrapper-basic-pages feature-content-reverse">
          <div class="_6-col">
            <div class="feature4-text-wrap feature-text-reverse">
              <h2 class="heading---medium black-text">Monetization platform</h2>
              <p class="text-16 text-16-80 _0-l-space">
                Playlog lets you produce in-the-moment narratives with up to 5 minutes to
                elaborate. Seamlessly combine audio, voiceover and visuals for FREE.
              </p>
            </div>
            <div class="feature4-text-wrap feature-text-reverse">
              <h2 class="heading---medium black-text">Easy payouts</h2>
              <p class="text-16 text-16-80 _0-l-space">
                Share your story, connect with those who resonate with your content, and
                nurture a new audience.
              </p>
            </div>
            <div class="feature4-text-wrap feature-text-reverse"></div>
          </div>
          <div class="_6-col _6-col-last">
            <div class="section-image-container agencies-image1"></div>
            <div class="button-block---basic-pages">
              <nuxt-link
                :to="localePath('/support/contact')"
                target="_blank"
                class="navigation-button---po w-button"
                >Contact Playlog</nuxt-link
              >
            </div>
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
          href: "/images/PlayBrush-Black-Overlay.svg",
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
