export default {
  head() {
    return {
      title: this.$t('page.title'),
      link: [
        ...this.link,
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("meta.description"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("page.title"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("meta.description"),
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("page.title"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("meta.description"),
        },
      ],
      script: [
        ...this.script,
      ],
    };
  },
  data() {
    return {
      link: [],
      script: [],
    };
  },
};
