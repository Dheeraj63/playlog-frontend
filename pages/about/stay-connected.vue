<i18n lang="yaml">
en:
  page:
    title: Stay Connected
  meta:
    description: "Follow our journey, subscribe to our mailing list, and become a more involved member for a chance to win exclusive rewards!"
</i18n>

<template>
  <div>
    <div class="header---o-p-b---black wf-section">
      <div class="wrap-heading hero-title">
        <div class="col-hero-title">
          <h2 class="heading---light">Stay Connected</h2>
          <h1 class="heading-hero">Follow our journey and win!</h1>
        </div>
      </div>
    </div>
    <div class="section-3 wf-section">
      <div class="wrap-2 w80-50-center">
        <div class="_6-col">
          <h2 class="black-text">
            Join us on <span class="gradient-text---p-o">Discord</span>
          </h2>
          <div class="feature3-subitem-wrapper">
            <div class="feature3-subitem-text-wrap">
              <h3 class="black-text heading---medium">Get Involved</h3>
              <div class="text-16 text-16-80 _0-l-space">
                Playlog is a new app currently in MVP stage. We are looking for people who
                want to help shape the future of content creation with us. If this appeals
                to you please become part of the Playlog community by joining our Discord.
              </div>
            </div>
          </div>
          <div class="feature3-subitem-wrapper">
            <div class="feature3-subitem-text-wrap">
              <h3 class="black-text heading---medium">Get exclusive rewards!</h3>
              <div class="text-16 text-16-80 _0-l-space">
                Joining our Discord community comes with its perks. Actively participate
                in our Discord server to get a chance to win amazing prizes.
              </div>
            </div>
          </div>
          <div class="home-col _7-col-last"></div>
          <div class="div-block-6">
            <a
              href="https://discord.com/invite/wkEBzjsTb2"
              target="_blank"
              class="navigation-button---po w-button"
              >Join our Discord</a
            >
          </div>
        </div>
        <div class="_3-col">
          <div class="discord-image1"></div>
          <div class="discord-image2"></div>
        </div>
        <div class="_3-col _3-col-last">
          <div class="discord-image3"></div>
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
          href: "/images/PlayBrush-Gradient-Colour-Overlays-05-02-02.svg",
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
