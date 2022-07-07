<template>
  <div
    class="profile-header bg-profile-header bg-cover bg-center"
    :class="['px-16 lg:px-f-16', 'h-104 lg:h-f-234']"
  >
    <div
      class="flex items-center flex-col mx-auto"
      :class="['max-w-max lg:max-w-lg', 'pt-20 lg:pt-f-30']"
    >
      <h1
        v-if="displayName"
        class="relative text-center font-bold text-white"
        :class="['mb-1 lg:mb-f-2', 'text-18 lg:text-f-36', 'leading-20 lg:leading-f-44']"
      >
        {{ displayName }}

        <button
          class="absolute top-0 right-0 flex items-center justify-center bg-white-opacity-30 rounded-full"
          :class="['h-20 lg:h-f-46', 'w-20 lg:w-f-46', '-mr-26 lg:-mr-f-64']"
          @click="share"
        >
          <Share :class="['h-10 lg:h-f-20', 'w-12 lg:w-f-26']" />
        </button>
      </h1>
      <span
        class="block text-center font-light text-white"
        :class="['mb-4 lg:mb-f-10', 'text-12 lg:text-f-24', 'leading-14 lg:leading-f-28']"
      >
        @{{ username }}
      </span>

      <UserAvatar
        :user="user"
        class="relative z-10 mx-auto"
        :class="[
          'w-88 lg:w-f-232',
          'h-88 lg:h-f-232',
          'mb-6 lg:mb-f-16',
          'rounded-16 lg:rounded-f-40',
        ]"
      />
    </div>
    <input ref="shareUrl" type="text" class="hidden" :value="profileShareUrl" />
  </div>
</template>

<script>
import User from "~/mixins/user";

import UserAvatar from "~/components/_global/UserAvatar";
import Share from "~/static/icons/share.svg?inline";

export default {
  components: { UserAvatar, Share },
  mixins: [User],
  methods: {
    share() {
      if (window.navigator.clipboard) {
        this.$refs.shareUrl.select();
        this.$refs.shareUrl.setSelectionRange(0, 99999); // mobile devices
        window.navigator.clipboard.writeText(this.$refs.shareUrl.value);
      }

      this.$emit("share");
    },
  },
};
</script>
