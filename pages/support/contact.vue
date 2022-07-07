<i18n lang="yaml">
en:
  page:
    title: Contact Us
  meta:
    description: "What can we help you with? Reach out, we are only a message away."
</i18n>

<template>
  <div>
    <div class="section-feature-header-vivid wf-section">
      <div class="wrap-2 _w-100">
        <div class="form2 form2-dark">
          <div class="_5-col-3">
            <div class="form2-image-wrapper"></div>
          </div>
          <div class="_7-col-2 _7-col-last">
            <div class="form2-form-section-wrapper">
              <div class="form2-form-wrap w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  action="/api/contact"
                  method="post"
                  class="form2-wrapper"
                  @submit.prevent="submit"
                >
                  <div class="tagline-4 black-text p-l-0">
                    What can we help you with?<br />Reach out, we&#x27;re only a message
                    away.
                  </div>
                  <h2 class="form2-headline black-text p-l-0">Contact Playlog</h2>
                  <label for="name-3" class="field-label black-text p-l-0">Name</label>
                  <input
                    id="name-2"
                    v-model="name"
                    type="text"
                    class="form2-input w-input"
                    maxlength="256"
                    name="name-2"
                    data-name="Name 2"
                    placeholder="Enter your name"
                    required
                  />
                  <label for="email-3" class="field-label black-text p-l-0">Email</label>
                  <input
                    id="email-2"
                    v-model="email"
                    type="email"
                    class="form2-input w-input"
                    maxlength="256"
                    name="email-2"
                    data-name="Email 2"
                    placeholder="Enter your email"
                    required
                  />
                  <label for="email-3" class="field-label black-text p-l-0"
                    >Confirm Email</label
                  >
                  <input
                    id="email-2-confirm"
                    v-model="confirmEmail"
                    type="email"
                    class="form2-input w-input"
                    :class="{ 'form-input-error': emailConfirmError }"
                    maxlength="256"
                    name="email-2"
                    data-name="Email 2"
                    placeholder="Re-enter your email"
                    required
                  />
                  <span class="form-input-error-message"
                    >Email and confirm email must match</span
                  >
                  <label for="Message" class="field-label black-text p-l-0"
                    >Message</label
                  >
                  <input
                    id="Message"
                    v-model="message"
                    type="text"
                    class="form2-input w-input"
                    maxlength="256"
                    name="Message"
                    data-name="Message"
                    placeholder="Your Message"
                    required
                  />
                  <div class="form2-buttons-wrapper">
                    <input
                      type="submit"
                      value="Submit"
                      data-wait="Please wait..."
                      class="navigation-button---po w-button"
                    />
                  </div>
                </form>
                <div
                  id="form2-error-message"
                  class="form2-error-message w-form-fail text-center"
                  :class="{ block: showSubmissionError }"
                >
                  <div class="form2-error-message-text">
                    Oops! Something went terribly wrong.
                  </div>
                </div>
                <div
                  id="form-success-modal"
                  class="support-contact-modal"
                  :class="{ 'support-contact-modal--open': showSubmissionConfirmation }"
                  @click="showSubmissionConfirmation = false"
                >
                  <div class="support-contact-modal__dialog">
                    <div id="form2-success-message" class="form2-success-message">
                      <picture>
                        <source
                          type="image/webp"
                          src="/images/big-check2x.webp"
                          srcset="/images/big-check2x.webp"
                          width="200"
                          alt=""
                        />
                        <img src="/images/big-check2x.png" width="200" alt="" />
                      </picture>
                      <div class="form2-success-message-text">
                        Thanks for your message! We'll get back to you ASAP.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          href: "/images/PlayBrush-Gradient-Colour-Overlays-02.svg",
        },
      ],

      name: "",
      email: "",
      confirmEmail: "",
      message: "",

      showSubmissionConfirmation: false,
      showSubmissionError: false,
      emailConfirmError: false,
    };
  },
  methods: {
    async submit() {
      const { name, email, confirmEmail, message } = this;

      this.showSubmissionConfirmation = false;
      this.showSubmissionConfirmation = false;
      this.emailConfirmError = false;

      if (email !== confirmEmail) {
        this.emailConfirmError = true;
        return false;
      }

      try {
        await this.$axios.post("/api/content", {
          name,
          email,
          message,
        });

        this.showSubmissionConfirmation = true;
      } catch (e) {
        this.showSubmissionError = true;
      }
    },
  },
};
</script>

<style scoped>
@import "~/static/css/normalize.css";
@import "~/static/css/webflow.css";
@import "~/static/css/playlog.webflow.css";

.form-input-error {
  border-color: orangered;

  margin-bottom: 0;
}
.form-input-error-message {
  display: none;
  color: orangered;
  font-weight: bold;
  font-size: 12px;
}

.form-input-error + .form-input-error-message {
  display: block;
}

.support-contact-modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  overflow: hidden;

  opacity: 0;

  z-index: 9999;

  background: rgba(33, 33, 33, 0.5);

  transition: 0.2s opacity ease-in-out;
}

.support-contact-modal--open {
  height: 100%;
  width: 100%;
  opacity: 1;
}

.support-contact-modal__dialog {
  box-sizing: border-box;

  width: 640px;
  max-width: 100%;
  max-height: 100%;
  padding: 80px 40px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translateX(-50%) translateY(-50%);

  background: white;
  border-radius: 40px;
  text-align: center;

  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5);
}
</style>
