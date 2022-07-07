<template>
  <div class="faq-question-wrap">
    <div class="faq-outline" @click="open = !open">
      <div class="faq-circle-1">
        <img
          src="/images/plus-green.svg"
          alt=""
          width="20"
          class="faq-icon noselect"
          :class="{ 'faq-icon--open': open }"
        />
      </div>
      <h3 class="faq-h3 noselect">
        <button class="bg-transparent p-0 m-0"><slot name="question" /></button>
      </h3>
    </div>
    <div
      class="faq-content"
      :class="{ 'faq-content--open': open }"
      :style="{ height: open ? `${contentHeight}px` : undefined }"
    >
      <div ref="content" class="paragraph-4">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      contentHeight: null,
    };
  },
  updated() {
    this.setContentHeight();
  },
  mounted() {
    this.setContentHeight();

    window.addEventListener("resize", this.setContentHeight);
  },
  unmounted() {
    window.removeEventListener("resize", this.setContentHeight);
  },
  methods: {
    setContentHeight() {
      this.contentHeight = this.$refs.content.clientHeight;
    },
  },
};
</script>

<style scoped>
@import "~/static/css/normalize.css";
@import "~/static/css/webflow.css";
@import "~/static/css/playlog.webflow.css";

.faq-icon {
  transition: 0.2s transform linear;
}

.faq-icon--open {
  transform: rotate(45deg);
}

.faq-content {
  height: 0;
  opacity: 0;

  transition: 0.2s height linear, 0.2s opacity linear;
}

.faq-content--open {
  opacity: 1;
}
</style>
