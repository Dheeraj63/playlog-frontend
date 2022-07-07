<i18n lang="yaml">
en:
  page:
    title: Easy Video Editor for Educational Videos
  meta:
    description: "Find out how educators use Playlog to increase viewer retention and social engagement. Start creating multimedia presentations!"
</i18n>

<template>
  <div>
    <div class="section-feature-header-vivid wf-section">
      <div class="wrap-heading hero-title">
        <div class="col-hero-title">
          <h2 class="heading---light">Solutions</h2>
          <h1 class="heading-hero">For Educators</h1>
        </div>
      </div>
    </div>
    <div class="section-5 wf-section">
      <div class="wrap-2 w50 _3-vids">
        <div class="content8-wrap">
          <div class="headline-8-col-2">
            <h2 class="black-text">Get inspired.</h2>
            <p class="text-16-2 text-16-60">
              Take a look at some of favourite educational content on Playlog. See how you
              can enhance your slide presentations and lectures with mixed media.
            </p>
          </div>
        </div>
        <div>
          <div class="columns-3 w-row">
            <div class="w-col w-col-4"></div>
            <div class="column-6 w-col w-col-4">
              <div class="w-embed">
                <video
                  controls=""
                  controlslist="nodownload"
                  poster="https://production-2.nyc3.cdn.digitaloceanspaces.com/static_pages/For-Educational-Page-Ethnography-and-Dialogue_Aciologariu.png"
                  width="100%"
                  height="100%"
                  style="background-color: #000"
                >
                  <source
                    src="https://production-2.nyc3.cdn.digitaloceanspaces.com/static_pages/For-Educational-Page-Ethnography-and-Dialogue_Aciologariu.mp4"
                    type="video/mp4"
                  />
                  <img
                    src="https://production-2.nyc3.cdn.digitaloceanspaces.com/static_pages/For-Educational-Page-Ethnography-and-Dialogue_Aciologariu.png"
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
