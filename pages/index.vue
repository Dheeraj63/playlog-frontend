<i18n lang="yaml">
en:
  page:
    title: Playlog
  meta:
    description: "Playlog is an early stage app that is actively building an amazing solution for content creators. Create, edit, explore and connect. Reserve your handle today!"
</i18n>

<template>
  <div class="webflow">
    <div class="official-home-hero center wf-section">
      <div class="hero-content-3">
        <h1 class="heading-21">By Creators,<br />For Creators.</h1>
        <h2 class="hero-subhead">The world through a new lens.</h2>
        <a
          href="https://apps.apple.com/ca/app/playlog/id1374482722"
          target="_blank"
          class="w-inline-block"
          ><img
            src="/images/app-store.svg"
            loading="lazy"
            alt="Link to App Store"
            width="159"
            class="image-6"
        /></a>
        <!-- a href="https://play.google.com/store/apps/details?id=com.playlog.playlog" target="_blank"
           class="w-inline-block"><img src="/images/play-store.svg" loading="lazy" alt="Link to Google Play" width="161"
                                       class="image-6"></a -->
      </div>
      <picture class="hero-image">
        <source
          type="image/webp"
          src="/images/Phone-Trio.webp"
          sizes="(max-width: 479px) 80vw, (max-width: 991px) 70vw, 100vw"
          srcset="/images/Phone-Trio-p-500.webp 500w, /images/Phone-Trio.webp 800w"
          alt="Image of the Playlog app"
        />
        <img
          src="images/Phone-Trio.png"
          sizes="(max-width: 479px) 80vw, (max-width: 991px) 70vw, 100vw"
          srcset="/images/Phone-Trio-p-500.png 500w, /images/Phone-Trio.png 800w"
          alt="Image of the Playlog app"
        />
      </picture>
    </div>
    <div class="wf-section">
      <div class="wrap-2 w50-center">
        <div class="_5-col-2" style="height: 100%">
          <video
            controlslist="nodownload"
            autoplay
            playsinline
            muted
            loop
            poster="/images/home-animation.webp"
            width="100%"
            height="100%"
            style="background-color: #fff"
          >
            <source
              src="https://production-2.nyc3.cdn.digitaloceanspaces.com/static_pages/animations/home-animation.mp4"
              type="video/mp4"
            />
            <img
              src="https://production-2.nyc3.cdn.digitaloceanspaces.com/static_pages/animations/home-animation.gif"
            />
          </video>
        </div>
        <div class="home-col _7-col-last">
          <div class="feature3-text-wrapper-2">
            <h2 class="black-text _30-l-space">
              We&#x27;re looking for the
              <span class="gradient-text-trio---g-b-p">next </span>generation of
              creators<span class="gradient-text-trio---g-b-p"> </span><br />
            </h2>
            <p class="text-16 text-16-80 _40-l-space">
              Playlog is currently in beta and will adapt to the changing needs of our
              content creators. Our mission is to empower storytellers to express
              themselves, entertain and connect with an active audience, and most
              importantly, be part of something exciting!
            </p>
            <div class="feature3-subitem-wrapper">
              <div class="feature3-subitem-text-wrap-home">
                <h3 class="black-text _30-l-space">Creative freedom in the making</h3>
                <div class="text-16 text-16-80">
                  Traditional social apps put creators in one-size-fits-all boxes and
                  encourage passive viewing. Playlog is working on a product that
                  effectively solves the biggest content creation pain points, all with
                  the support of content creators and early adopters. Ready for a change
                  in the content creation landscape?
                  <nuxt-link :to="localePath('/about/stay-connected')"
                    >Join us today</nuxt-link
                  >.
                </div>
              </div>
            </div>
            <div class="feature3-subitem-wrapper">
              <div class="feature3-subitem-text-wrap-home"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-section---features wf-section"></div>
    <div class="section-2 wf-section">
      <div class="wrap-2 w80-50-start home-mobile-spacing">
        <div class="_6-col">
          <div class="content6-headline">
            <h2 class="black-text">About us</h2>
          </div>
          <nuxt-link
            :to="localePath('/about/why-playlog')"
            class="content6-pic content6-image1 w-inline-block"
          >
            <h1 class="heading-home-players">Why Playlog</h1>
          </nuxt-link>
        </div>
        <div class="_6-col _6-col-last">
          <nuxt-link
            :to="localePath('/about/about-us')"
            class="content6-pic content6-image3 w-inline-block"
          >
            <h1 class="heading-home-players">Our mission</h1>
          </nuxt-link>
          <nuxt-link
            :to="localePath('/about/stay-connected')"
            class="content6-pic content6-image2 w-inline-block"
          >
            <h1 class="heading-home-players">Join us</h1>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from "~/mixins/meta";

export default {
  mixins: [Meta],
};
</script>

<style scoped>
@import "~/static/css/normalize.css";
@import "~/static/css/webflow.css";
@import "~/static/css/playlog.webflow.css";
</style>
