<template>
  <!-- eslint-disable vue/no-v-html -->
  <span v-if="parsedText" class="linkified-text" v-html="parsedText" />
  <!-- eslint-enable vue/no-v-html -->
</template>

<script>
import linkifyStr from "linkify-string";

export default {
  props: {
    text: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    parsedText() {
      return this.text ? this.getSafeText(this.text) : null;
    },
  },
  methods: {
    getSafeText(text) {
      return this.parseUrls(text);
    },
    parseUrls(string) {
      return linkifyStr(string, {
        className: "underline hover:text-indigo-playlog",
        format: (value, type) => {
          if (type === "url" && /playlog\.com\/@/.test(value)) {
            return value.slice(value.indexOf("@"));
          }

          return value;
        },
        target: (href) => (/playlog\.com/.test(href) ? null : "_blank"),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        validate: (value, type) => type !== "email",
      });
    },
  },
};
</script>
