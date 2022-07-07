<template>
  <div
    v-if="hasSocialConnections"
    class="social-connections flex items-center justify-center overflow-scroll"
  >
    <a
      v-for="(socialConnection, index) in socialConnections"
      :key="index"
      :href="getHref(socialConnection)"
      class="inline-flex flex-none items-center justify-center"
      :class="{
        'mr-16': index < lastSocialConnectionIndex,
      }"
      target="_blank"
    >
      <component
        :is="socialConnection.platform"
        class="w-auto hover:text-indigo-playlog"
        :class="['h-14 lg:h-f-20']"
      />
    </a>
  </div>
</template>

<script>
import Discord from "~/static/icons/social/discord.svg?inline";
import Email from "~/static/icons/social/email.svg?inline";
import Facebook from "~/static/icons/social/facebook.svg?inline";
import Instagram from "~/static/icons/social/instagram.svg?inline";
import Snapchat from "~/static/icons/social/snapchat.svg?inline";
import Tiktok from "~/static/icons/social/tiktok.svg?inline";
import Twitter from "~/static/icons/social/twitter.svg?inline";
import Website from "~/static/icons/social/website.svg?inline";
import Youtube from "~/static/icons/social/youtube.svg?inline";

export default {
  components: {
    Discord,
    Email,
    Facebook,
    Instagram,
    Snapchat,
    Tiktok,
    Twitter,
    Website,
    Youtube,
  },
  props: {
    socialConnections: {
      type: Array,
      required: true,
    },
  },
  computed: {
    hasSocialConnections() {
      return this.socialConnections.length;
    },
    lastSocialConnectionIndex() {
      return this.socialConnections.length - 1;
    },
  },
  methods: {
    getHref(socialConnection) {
      const url = [...socialConnection.urls].shift();

      if (!url) return "#";

      if (socialConnection.platform === "email") {
        return `mailto:${url}`;
      }

      return url.includes("://") ? url : `https://${url}`;
    },
    getIconSrc(socialConnection) {
      switch (socialConnection.platform) {
        case "discord":
          return "~/static/icons/social/discord.svg";
        case "email":
          return "icons/social/email.svg";
        case "facebook":
          return "icons/social/facebook.svg";
        case "instagram":
          return "icons/social/instagram.svg";
        case "snapchat":
          return "icons/social/snapchat.svg";
        case "tiktok":
          return "icons/social/tiktok.svg";
        case "twitter":
          return "icons/social/twitter.svg";
        case "website":
          return "icons/social/website.svg";
        case "youtube":
          return "icons/social/youtube.svg";
      }

      return "icons/link.svg";
    },
  },
};
</script>
