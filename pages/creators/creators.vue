<i18n lang="yaml">
en:
  page:
    title: Creators
  meta:
    description: "Get discovered, diversify your content, and turn everyday experiences into lasting memories. Find out how storytellers can grow with Playlog."
</i18n>

<template>
  <div>
    <div class="page-header-bg---black-edges gradient-bg---o-p-b wf-section">
      <div class="wrap-heading hero-title">
        <div class="col-hero-title">
          <h2 class="heading---light">Creators</h2>
          <h1 class="heading-hero">Share yourself with the world</h1>
        </div>
      </div>
    </div>
    <div id="compose" class="section-6 wf-section">
      <div class="wrap-2 w50">
        <div class="features-wrapper-basic-pages feature-content-reverse">
          <div class="_6-col">
            <div class="feature4-text-wrap feature-text-reverse">
              <h2 class="heading---medium black-text">Get discovered</h2>
              <p class="text-16 text-16-80 _0-l-space">
                Playlog enables equitable visibility by letting users explore content via
                a chronological or an interest-based algorithm. This gives all creators a
                fair chance to grow.
              </p>
            </div>
            <div class="feature4-text-wrap feature-text-reverse">
              <h2 class="heading---medium black-text">Diversify your content</h2>
              <p class="text-16 text-16-80 _0-l-space">
                Playlog is an entirely new platform and an opportunity for you to try
                something different with your content. This is your chance to experiment
                new content ideas with a totally new audience.
              </p>
            </div>
            <div class="feature4-text-wrap feature-text-reverse"></div>
          </div>
          <div class="_6-col _6-col-last">
            <div class="section-image-container creators-image1"></div>
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
