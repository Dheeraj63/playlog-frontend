<i18n lang="yaml">
en:
  page:
    title: About Playlog
  meta:
    description: "We're changing the way the world creates, edits and shares stories - all with the help and support of content creators. Learn more about our mission!"
</i18n>

<template>
  <div>
    <div class="header---g-b-p---black wf-section">
      <div class="wrap-heading hero-title">
        <div class="col-hero-title">
          <h2 class="heading---light">About Playlog</h2>
          <h1 class="heading-hero">Changing how you create, edit &amp; share</h1>
        </div>
      </div>
    </div>
    <div id="compose" class="wf-section">
      <div class="wrap-2 w80-50">
        <div class="features-wrapper feature-content-reverse">
          <div class="_6-col">
            <div class="feature4-text-wrap feature-text-reverse">
              <h3 class="black-text">
                <span class="gradient-text---b-g">We believe</span> that creativity should
                be boundless, but it&#x27;s being held back.
              </h3>
              <p class="text-16 text-16-80 _0-l-space">
                Traditional social apps have complex editing tools, require creators to
                <em>study</em> their algorithm in order to grow, and create passive
                watchers. Playlog provides creators the freedom to create with ease,
                publish content on their terms, and explore without limits.
              </p>
            </div>
          </div>
          <div class="_6-col _6-col-last">
            <div class="section-image-container aboutus-image1"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="create" class="wf-section">
      <div class="wrap-2 w80-50">
        <div class="features-wrapper">
          <div class="_6-col reverse-padding">
            <div class="feature4-text-wrap reverse-spacing">
              <h3 class="black-text">
                <span class="gradient-text---p-o">Playlog is an MVP app</span> that&#x27;s
                actively changing how you create and share.
              </h3>
              <p class="text-16 text-16-80 _0-l-space">
                Our early-stage app offers simple editing tools that help creators cut
                down editing time down from days to minutes. The
                <nuxt-link :to="localePath('/download')">
                  <span class="text-span-4">Playlog app</span></nuxt-link
                >
                is for story-driven creators who like to produce thought-provoking videos
                and seamlessly share them with the world in seconds. All you need is a
                story to tell, a question to ask, or an idea to explain.
              </p>
            </div>
          </div>
          <div class="_6-col _6-col-last padding-reverse">
            <div class="section-image-container aboutus-image2"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="compose" class="wf-section">
      <div class="wrap-2 w80-50">
        <div class="features-wrapper feature-content-reverse">
          <div class="_6-col">
            <div class="feature4-text-wrap feature-text-reverse">
              <h3 class="black-text">
                We&#x27;re <span class="gradient-text---p-b">actively building</span> this
                platform with the help of content creators.
              </h3>
              <p class="text-16 text-16-80 _0-l-space">
                Our upcoming features are being shaped with the support of storytellers
                across the globe who are passionate about making Playlog the best platform
                for them and their content creation needs. If you&#x27;d like to get more
                involved and have a say in what gets released next, join our
                <a href="https://discord.com/invite/wkEBzjsTb2" target="_blank"
                  ><span class="text-span-7">Discord community</span></a
                >!
              </p>
            </div>
          </div>
          <div class="_6-col _6-col-last">
            <div class="section-image-container aboutus-image3"></div>
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
          href: "/images/PlayBrush-Gradient-Colour-Overlays-03-02.svg",
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
