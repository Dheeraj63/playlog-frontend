<i18n lang="yaml">
en:
  page:
    title: Brands
  meta:
    description: "Build your brand, reach new audiences, and drive results. Find out how brands can benefit from using Playlog."
</i18n>

<template>
  <div>
    <div class="page-header-bg---black-edges gradient-bg---o-p-b wf-section">
      <div class="wrap-heading hero-title">
        <div class="col-hero-title">
          <h2 class="heading---light">Businesses</h2>
          <h1 class="heading-hero">Reach a new audience</h1>
        </div>
      </div>
    </div>
    <div id="compose" class="wf-section">
      <div class="wrap-2 w50">
        <div class="features-wrapper-basic-pages feature-content-reverse">
          <div class="_6-col">
            <div class="feature4-text-wrap feature-text-reverse">
              <h2 class="heading---medium black-text">Increase brand awareness</h2>
              <p class="text-16 text-16-80 _0-l-space">
                Let your brand&#x27;s value and personality shine through your creations.
                Playlog gives you up to 5 minutes to get your message across.
              </p>
            </div>
            <div class="feature4-text-wrap feature-text-reverse">
              <h2 class="heading---medium black-text">
                Reach active viewers<span class="gradient-text---b-g"></span>
              </h2>
              <p class="text-16 text-16-80 _0-l-space">
                Connect with a new audience that is actively engaged and eager to take
                action. Find potential customers in a variety of niches.
              </p>
            </div>
            <div class="feature4-text-wrap feature-text-reverse">
              <h2 class="heading---medium black-text">Save resources</h2>
              <p class="text-16 text-16-80 _0-l-space">
                Create unique, high quality videos for your brand for FREE. No prior
                experience is required to use our light editing tools.
              </p>
            </div>
          </div>
          <div class="_6-col _6-col-last">
            <div class="section-image-container brands-image1"></div>
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
