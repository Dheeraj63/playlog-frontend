<i18n lang="yaml">
en:
  Privacy: Privacy
  Terms: Terms
fr:
ja:
  Privacy: プライバシーポリシー
  Terms: 利用規約
ko:
  Privacy: 개인정보 보호정책
  Terms: 이용 약관
zh-cn:
  Privacy: 隐私政策
  Terms: 服务条款
zh-tw:
  Privacy: 隱私權政策
  Terms: 服務條款
</i18n>

<template>
  <div class="footer-pl">
    <div class="footer-menu">
      <div class="footer-container">
        <div class="footer-col">
          <h5 class="footer-title">Support</h5>
          <nuxt-link :to="localePath('/support/contact')" class="footer-links"
            >Contact</nuxt-link
          >
          <nuxt-link :to="localePath('/support/faq')" class="footer-links">FAQ</nuxt-link>
        </div>
        <div class="footer-col">
          <h5 class="footer-title">Solutions</h5>
          <nuxt-link
            :to="localePath('/solutions/educational-playlogs')"
            class="footer-links"
            >Playlog for Educators</nuxt-link
          >
          <nuxt-link
            :to="localePath('/solutions/playlog-for-real-estate')"
            class="footer-links"
            >Playlogs for Real Estate</nuxt-link
          >
        </div>
        <div class="footer-col">
          <h5 class="footer-title">Downloads</h5>
          <nuxt-link :to="localePath('/download')" class="footer-links"
            >Download on iOS</nuxt-link
          >
          <a :href="localePath('/android-support')" class="footer-links"
            >Android Waitlist</a
          >
        </div>
      </div>
    </div>
    <div class="footer-sub">
      <div class="footer-container fb-footer">
        <nuxt-link
          :to="localePath('/')"
          aria-current="page"
          class="brand-3 w-inline-block w--current"
          ><img src="/images/playlog-logo-white.svg" width="180" alt="" class="image-8"
        /></nuxt-link>
        <div class="fb-footer-wrapper">
          <div class="footer-text">
            <nuxt-link :to="localePath('/terms/privacy-policy')" class="subfooter-link">{{
              $t("Privacy")
            }}</nuxt-link>
            <a href="#" class="subfooter-link">|</a>
            <nuxt-link
              :to="localePath('/terms/terms-of-service')"
              class="subfooter-link"
              >{{ $t("Terms") }}</nuxt-link
            >
          </div>
          <div class="social-wrapper-2">
            <a
              href="https://www.instagram.com/playlogapp/"
              target="_blank"
              class="icon fb-footer-link"
              ></a
            >
            <a
              href="https://www.facebook.com/playlogapp"
              target="_blank"
              class="icon fb-footer-link"
              ></a
            >
            <a
              href="https://twitter.com/PlaylogApp"
              target="_blank"
              class="icon fb-footer-link"
              ></a
            >
            <a
              href="https://www.linkedin.com/company/playlog/"
              target="_blank"
              class="icon fb-footer-link"
              ></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "~/static/css/normalize.css";
@import "~/static/css/webflow.css";
@import "~/static/css/playlog.webflow.css";
</style>
