export default {
  props: {
    playlog: {
      type: Object,
      required: false,
      default: null,
      validator: value => !!value.uid
    }
  },
  computed: {
    playlogData() {
      return this.playlog ? this.playlog : {}
    },
    uid() {
      return this.playlogData.uid || null
    },
    isPinned() {
      return !!this.playlogData.is_pinned
    },
    cardUrl() {
      return this.playlogData.card_url ? this.playlogData.card_url : null
    },
    thumbnailXl() {
        return this.cardUrl ? this.getRemoteImageUrl(this.cardUrl, { size: 1080 }) : null
    },
    rawStitchedVideoUrl() {
      return this.playlog ? this.playlog.raw_stitched_video_url : null;
    },
    user() {
      return this.playlog.user ? this.playlog.user : null;
    },
  }
}
