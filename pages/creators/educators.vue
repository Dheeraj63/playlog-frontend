<i18n lang="yaml">
en:
  page:
    title: Educators
  meta:
    description: "Easily create engaging video presentations, tutorials, how to&#x27;s, or lectures with Playlog. Here&#x27;s how we help educators maximize time."
</i18n>

<template>
  <div>
    <div class="page-header-bg---black-edges gradient-bg---o-p-b wf-section">
      <div class="wrap-heading hero-title">
        <div class="col-hero-title">
          <h2 class="heading---light">Educators</h2>
          <h1 class="heading-hero"><strong>Share your skills interactively</strong></h1>
        </div>
      </div>
    </div>
    <div id="compose" class="wf-section">
      <div class="wrap-2 w50">
        <div class="features-wrapper-basic-pages feature-content-reverse">
          <div class="_6-col">
            <div class="feature4-text-wrap feature-text-reverse">
              <h2 class="heading---medium black-text">
                Teach your expertise in a new way
              </h2>
              <p class="text-16 text-16-80 _0-l-space">
                Combine audio, voiceovers, text, and visuals to create attention-grabbing
                presentations. Playlog is a FREE light video editor for all types of
                educators.
              </p>
            </div>
            <div class="feature4-text-wrap feature-text-reverse">
              <h2 class="heading---medium black-text">
                Engage watchers in deeper learning
              </h2>
              <p class="text-16 text-16-80 _0-l-space">
                Viewers are likelier to interact with content that inspires them. Increase
                learning retention in your classroom by incorporating mixed media.
              </p>
            </div>
            <div class="feature4-text-wrap feature-text-reverse"></div>
          </div>
          <div class="_6-col _6-col-last">
            <div class="section-image-container educators-image1"></div>
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
