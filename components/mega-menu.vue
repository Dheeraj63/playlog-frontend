<template>
  <div class="mega-menu">
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      role="banner"
      class="navigation w-nav"
    >
      <div class="navigation-full">
        <div class="navigation-container">
          <div class="navigation-left">
            <nuxt-link :to="localePath('/')" class="brand-2 w-nav-brand">
              <img src="/images/PlayLog-logo-lockup-grey.svg" alt="" class="logo" />
            </nuxt-link>
            <nav role="navigation" class="nav-menu w-nav-menu">
              <div data-hover="1" data-delay="150" class="dropdown w-dropdown">
                <div
                  class="dropdown-toggle w-dropdown-toggle"
                  @click="setOpenMenu('about-us')"
                >
                  <div class="drop-arrow-plain w-icon-dropdown-toggle"></div>
                  <div class="mega-menu-title">About Us</div>
                </div>
                <nav
                  class="dropdown-list w-dropdown-list"
                  :class="{ 'dropdown-list--open': aboutUsOpen }"
                >
                  <div class="dropdown-list-full-wrapper">
                    <div class="navigation-drop-container">
                      <div class="navigation-column">
                        <nuxt-link
                          :to="localePath('/about/about-us')"
                          class="navigation-link-block w-inline-block"
                        >
                          <div class="nav-content-wrap">
                            <div class="nav-title gradient-text---b-g">About Us</div>
                            <div class="nav-link-details">
                              Learn about the Playlog origins, our why, and our mission.
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                      <div class="navigation-column">
                        <nuxt-link
                          :to="localePath('/about/why-playlog')"
                          class="navigation-link-block w-inline-block"
                        >
                          <div class="nav-content-wrap">
                            <div class="nav-title gradient-text---p-b">Why Playlog</div>
                            <div class="nav-link-details">
                              How we differentiate from others.
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                      <div class="navigation-column">
                        <nuxt-link
                          :to="localePath('/about/stay-connected')"
                          class="navigation-link-block w-inline-block"
                        >
                          <div class="nav-content-wrap">
                            <div class="nav-title gradient-text---p-o">
                              Stay Connected
                            </div>
                            <div class="nav-link-details">
                              Join our discord and win prizes.
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div data-hover="1" data-delay="150" class="dropdown w-dropdown">
                <div
                  class="dropdown-toggle w-dropdown-toggle"
                  @click="setOpenMenu('creators')"
                >
                  <div class="drop-arrow-plain w-icon-dropdown-toggle"></div>
                  <div class="mega-menu-title">Creators</div>
                </div>
                <nav
                  class="dropdown-list w-dropdown-list"
                  :class="{ 'dropdown-list--open': creatorsOpen }"
                >
                  <div class="dropdown-list-full-wrapper">
                    <div class="navigation-drop-container">
                      <div class="navigation-column">
                        <nuxt-link
                          :to="localePath('/creators/creators')"
                          class="navigation-link-block w-inline-block"
                        >
                          <div class="nav-content-wrap">
                            <div class="nav-title gradient-text---o-y">Creators</div>
                            <div class="nav-link-details">
                              Create stories anywhere, anytime.
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                      <div class="navigation-column">
                        <nuxt-link
                          :to="localePath('/creators/brands-business')"
                          class="navigation-link-block w-inline-block"
                        >
                          <div class="nav-content-wrap">
                            <div class="nav-title gradient-text---p-b">
                              Brands / Business
                            </div>
                            <div class="nav-link-details">
                              Build you brand, reach new audiences and drive results.
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                      <div class="navigation-column">
                        <nuxt-link
                          :to="localePath('/creators/educators')"
                          aria-current="page"
                          class="navigation-link-block w-inline-block w--current"
                        >
                          <div class="nav-content-wrap">
                            <div class="nav-title gradient-text---b-g">Educators</div>
                            <div class="nav-link-details">
                              Teach your expertise interactively. We help educators
                              maximize time.
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </nav>
          </div>
          <div class="navigation-right">
            <nuxt-link
              :to="localePath('/download')"
              target="_blank"
              class="navigation-button---gb w-button"
              >Download Now</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-easing="ease-out"
      data-easing2="ease-out"
      role="banner"
      class="navigation-mob w-nav"
    >
      <div class="navigation-container-mob">
        <nuxt-link :to="localePath('/')" class="w-nav-brand"
          ><img src="/images/PlayLog-logo-lockup-grey.svg" alt="" class="flowbase-logo"
        /></nuxt-link>
        <nav role="navigation" class="mobile-nav w-nav-menu">
          <div data-delay="0" class="mobile-dropdown w-dropdown">
            <div class="mobile-toggle w-dropdown-toggle">
              <div class="w-icon-dropdown-toggle"></div>
              <div class="mega-menu-mob-title">About Us</div>
            </div>
            <nav class="dropdown-list-mob w-dropdown-list">
              <nuxt-link
                :to="localePath('/about/about-us')"
                class="navigation-link-block-mob w-inline-block"
              >
                <div class="nav-content-wrap">
                  <div class="nav-title gradient-text---b-g">About Us</div>
                  <div class="nav-link-details">
                    Learn about the Playlog origins, our why, and our mission.
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link
                :to="localePath('/about/why-playlog')"
                class="navigation-link-block-mob w-inline-block"
              >
                <div class="nav-content-wrap">
                  <div class="nav-title gradient-text---p-b">Why Playlog</div>
                  <div class="nav-link-details">How we differentiate from others.</div>
                </div>
              </nuxt-link>
              <nuxt-link
                :to="localePath('/about/stay-connected')"
                class="navigation-link-block-mob w-inline-block"
              >
                <div class="nav-content-wrap">
                  <div class="nav-title gradient-text---o-y">Stay Connected</div>
                  <div class="nav-link-details">Join our discord and win prizes.</div>
                </div>
              </nuxt-link>
            </nav>
          </div>
          <div data-delay="0" class="mobile-dropdown w-dropdown">
            <div class="mobile-toggle w-dropdown-toggle">
              <div class="w-icon-dropdown-toggle"></div>
              <div class="mega-menu-mob-title">Creators</div>
            </div>
            <nav class="dropdown-list-mob w-dropdown-list">
              <nuxt-link
                :to="localePath('/creators/creators')"
                class="navigation-link-block-mob w-inline-block"
              >
                <div class="nav-content-wrap">
                  <div class="nav-title gradient-text---o-y">Creators</div>
                  <div class="nav-link-details">Create stories anywhere, anytime.</div>
                </div>
              </nuxt-link>
              <nuxt-link
                :to="localePath('/creators/brands-business')"
                class="navigation-link-block-mob w-inline-block"
              >
                <div class="nav-content-wrap">
                  <div class="nav-title gradient-text---p-b">Brands / Business</div>
                  <div class="nav-link-details">
                    Build you brand, reach new audiences and drive results.
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link
                :to="localePath('/creators/educators')"
                aria-current="page"
                class="navigation-link-block-mob w-inline-block w--current"
              >
                <div class="nav-content-wrap">
                  <div class="nav-title gradient-text---b-g">Educators</div>
                  <div class="nav-link-details">
                    Teach your expertise interactively. We help educators maximize time.
                  </div>
                </div>
              </nuxt-link>
            </nav>
          </div>
        </nav>
        <div class="menu-button w-nav-button">
          <div class="menu-icon gradient-text-trio---g-b-p w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false,
    };
  },
  computed: {
    aboutUsOpen() {
      return this.openMenu === "about-us";
    },
    creatorsOpen() {
      return this.openMenu === "creators";
    },
  },
  watch: {
    $route() {
      this.openMenu = false;
    },
  },
  methods: {
    setOpenMenu(menu) {
      if (["about-us", "creators"].includes(menu) && menu !== this.openMenu) {
        this.openMenu = menu;
      } else {
        this.openMenu = false;
      }
    },
  },
};
</script>

<style scoped>
@import "~/static/css/normalize.css";
@import "~/static/css/webflow.css";
@import "~/static/css/playlog.webflow.css";
.dropdown-list {
  display: block;
  height: 0;
  width: 0;
  overflow: hidden;
  opacity: 0;

  transition: 0.25s opacity linear;
}
.dropdown-list--open {
  height: initial;
  width: initial;
  position: absolute;
  left: 0px;
  top: 76px;
  right: 0px;
  bottom: auto;
  padding-top: 25px;
  background-color: transparent;
  box-shadow: 2px 30px 50px 0 rgb(0 0 0 / 8%);
  opacity: 1;
  transition: 0.25s opacity linear;
}
</style>
