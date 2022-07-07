<template>
  <div class="profile">
    <ProfileHeader :user="userData" @share="showShare = !showShare" />
    <ProfileBody
      :show-share="showShare"
      :user="userData"
      @share="showShare = !showShare"
    />
  </div>
</template>

<script>
import User from "~/mixins/user";

export default {
  mixins: [User],
  layout: "app",
  async asyncData({ $axios, params, error }) {
    try {
      const response = await $axios.get(`users/${params.username}`);

      return { response: response.data };
    } catch (err) {
      const response = err.response;

      error({ statusCode: response.status, message: response.data.message });
    }
  },
  data() {
    return {
      showShare: false,
    };
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: "og:type",
          name: "og:type",
          content: "profile",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: `${process.env.appUrl}${this.$route.fullPath}`,
        },
        ...(this.username
          ? [
              {
                hid: "og:profile:username",
                name: "og:profile:username",
                content: this.username,
              },
            ]
          : undefined),
        ...(this.metaTitle
          ? [
              {
                hid: "og:title",
                name: "og:title",
                content: this.metaTitle,
              },
              {
                hid: "twitter:title",
                name: "twitter:title",
                content: this.metaTitle,
              },
            ]
          : undefined),
        ...(this.metaDescription
          ? [
              {
                hid: "description",
                name: "description",
                content: this.metaDescription,
              },
              {
                hid: "og:description",
                name: "og:description",
                content: this.metaDescription,
              },
              {
                hid: "twitter:description",
                name: "twitter:description",
                content: this.metaDescription,
              },
            ]
          : undefined),
        ...(this.metaImage
          ? [
              {
                hid: "og:image",
                name: "og:image",
                content: this.metaImage,
              },
              {
                hid: "twitter:image",
                name: "twitter:image",
                content: this.metaImage,
              },
              {
                hid: "twitter:card",
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
          : undefined),
      ],
    };
  },
  computed: {
    responseData() {
      return this.response && this.response.data ? this.response.data : {};
    },
    userData() {
      return this.responseData && this.responseData.user ? this.responseData.user : {};
    },
    metaTitle() {
      return this.displayName ? `${this.displayName}'s Profile` : undefined;
    },
    metaDescription() {
      return this.headline || this.description
        ? (this.headline || this.description).slice(0, 160)
        : undefined;
    },
    metaImage() {
      return this.usingDefaultPhotoUrl
        ? `${process.env.appUrl}${this.defaultPhotoUrl}`
        : this.photoUrl;
    },
  },
};
</script>
