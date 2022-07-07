<template>
  <div
    class="profile-body mx-auto relative"
    :class="['max-w-max lg:max-w-lg', 'pt-58 lg:pt-f-128', 'px-20 lg:px-f-20']"
  >
    <div class="text-center" :class="['mb-20 lg:mb-f-34', 'px-30 lg:px-f-90']">
      <h2
        class="font-medium text-black"
        :class="['mb-8 lg:mb-f-14', 'text-14 lg:text-f-20', 'leading-20 lg:leading-f-24']"
      >
        {{ headline }}
      </h2>

      <p
        class="text-gray-playlog"
        :class="[
          'mb-14 lg:mb-f-24',
          'text-12 lg:text-f-18',
          'leading-14 lg:leading-f-22',
        ]"
      >
        <LinkifiedText :text="description" />
      </p>

      <div class="max-w-full overflow-scroll">
        <SocialConnections :social-connections="socialConnections" />
      </div>
    </div>

    <div
      class="relative flex items-center justify-center w-full"
      :class="['mb-6 lg:mb-f-0']"
    >
      <div
        class="absolute -z-1 w-full bottom-0 border-solid border-gray-border"
        :class="['border-b-1 lg:border-b-f-2']"
      />
      <button
        class="flex items-center justify-center px-0 border-solid"
        :class="[
          'w-22 lg:w-f-50',
          'mr-168 lg:mr-f-350',
          'py-4 lg:py-f-10',
          'text-12 lg:text-f-24',
          'leading-14 lg:leading-f-28',
          'border-b-1.5 lg:border-b-f-2',
          {
            'text-indigo-playlog border-indigo-playlog': showLinks,
            'text-gray-inactive border-transparent hover:text-black hover:border-black': !showLinks,
          },
        ]"
        @click="activeTab = 'links'"
      >
        <Link :class="['inline-block', 'h-16 lg:h-f-34']" />
        <span class="overflow-hidden h-0 w-0">Connect</span>
      </button>

      <button
        class="flex items-center justify-center px-0 border-solid"
        :class="[
          'w-22 lg:w-f-50',
          'py-4 lg:py-f-10',
          'text-12 lg:text-f-24',
          'leading-14 lg:leading-f-28',
          'border-b-1.5 lg:border-b-f-2',
          {
            'text-indigo-playlog border-indigo-playlog': showPlaylogs,
            'text-gray-inactive border-transparent hover:text-black hover:border-black': !showPlaylogs,
          },
        ]"
        @click="activeTab = 'playlogs'"
      >
        <Playlog :class="['inline-block', 'h-16 lg:h-f-34']" />
        <span class="overflow-hidden h-0 w-0">Plogs</span>
      </button>
    </div>

    <div class="w-full">
      <div v-if="showLinks" class="w-full" :class="['py-10 lg:py-f-16']">
        <div class="mb-28">
          <a
            v-for="(socialConnection, index) in socialConnections"
            :key="index"
            :href="getHref(socialConnection)"
            class="block w-full text-center border-solid"
            :class="[
              'text-gray-playlog hover:border-indigo-playlog',
              'border-gray-playlog hover:text-indigo-playlog',
              'focus:text-white focus:bg-indigo-playlog focus:border-indigo-playlog',
              'mb-12 lg:mb-f-18',
              'py-10 lg:py-f-20',
              'text-14',
              'leading-16 font-medium border-1 lg:border-f-2',
              'rounded-5 lg:rounded-f-5',
            ]"
            target="_blank"
          >
            {{ getConnectionName(socialConnection) }}
          </a>
        </div>

        <VideoGrid :user="user" />
      </div>

      <div v-if="showPlaylogs" class="w-full" :class="['py-6 lg:py-f-0']">
        <PlaylogGrid :user="user" />
      </div>
    </div>

    <div
      v-if="showShare"
      class="absolute top-0 left-1/2 bottom-0 min-w-min w-screen transform -translate-x-1/2 z-8 bg-backdrop-opacity-53"
      @click="$emit('share')"
    >
      <div
        class="text-center absolute top-0 left-1/2 transform -translate-x-1/2 z-10 bg-white"
        :class="[
          'mt-80 lg:mt-f-168',
          'px-20 lg:px-f-26',
          'py-28 lg:py-f-40',
          'lg:w-f-366',
          'rounded-8 lg:rounded-f-16',
        ]"
        @click.stop
      >
        <button
          class="absolute top-0 right-0"
          :class="['mt-8 lg:mt-f-10', 'mr-10 lg:mr-f-16']"
          @click="$emit('share')"
        >
          <Close class="w-12 h-12 lg:h-f-14 lg:w-f-14" />
        </button>

        <div class="flex items-center flex-col">
          <span
            class="font-bold inline-block relative"
            :class="[
              'mb-12 lg:mb-f-20',
              'text-12 lg:text-f-18',
              'leading-18 lg:leading-f-22',
            ]"
          >
            Link Copied!<Check
              class="absolute top-1/2 right-0 transform -translate-y-1/2"
              :class="['-mr-18 lg:-mr-f-26', 'h-14 lg:h-f-20', 'w-14 lg:w-f-20']"
            />
          </span>

          <input
            type="text"
            :value="profileShareUrl"
            class="text-center border-solid border-indigo-playlog text-indigo-playlog"
            :class="[
              'px-34 lg:px-f-50',
              'py-10 lg:py-f-18',
              'text-14 lg:text-f-18',
              'leading-18 lg:leading-f-22',
              'border-1 lg:border-f-2',
              'rounded-5 lg:rounded-f-5',
            ]"
            readonly
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkifiedText from "./_global/LinkifiedText.vue";
import PlaylogGrid from "~/components/Profile/PlaylogGrid";
import SocialConnections from "~/components/Profile/SocialConnections.vue";
import VideoGrid from "~/components/Profile/VideoGrid";

import Check from "~/static/icons/check.svg?inline";
import Close from "~/static/icons/close.svg?inline";
import Link from "~/static/icons/link.svg?inline";
import Playlog from "~/static/icons/playlog.svg?inline";

import User from "~/mixins/user";

export default {
  components: {
    LinkifiedText,
    PlaylogGrid,
    SocialConnections,
    VideoGrid,
    Check,
    Close,
    Link,
    Playlog,
  },
  mixins: [User],
  props: {
    showShare: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      activeTab: "links",
    };
  },
  computed: {
    showLinks() {
      return !this.showPlaylogs;
    },
    showPlaylogs() {
      return this.activeTab === "playlogs";
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
    getConnectionName(socialConnection) {
      const { platform } = socialConnection;

      switch (platform) {
        case "email":
        case "website":
          // will be translated eventually
          return this.capitalizeWord(platform);
        case "tiktok":
          return "TikTok";
        case "youtube":
          return "YouTube";
      }

      if (platform.length > 1) {
        return this.capitalizeWord(platform);
      }

      return platform;
    },
  },
};
</script>
