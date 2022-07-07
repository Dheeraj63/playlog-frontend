export default {
  props: {
    user: {
      type: Object,
      required: false,
      default: null,
      validator: (value) => !!value.id,
    },
  },
  data() {
    return {
      defaultPhotoUrl: '/icons/profile.svg',
    }
  },
  computed: {
    userData() {
      return this.user ? this.user : {}
    },
    isFollowing() {
      return this.canFollow && this.userData && this.userData.is_following ? this.userData.is_following : false
    },
    isOwner() {
      return this.userData.is_owner ? this.userData.isOwner : false
    },
    canFollow() {
      return !this.isOwner
    },
    description() {
      return this.userData.description ? this.userData.description : null
    },
    headline() {
      return this.userData.headline ? this.userData.headline : null
    },
    displayName() {
      return this.fullName || this.username || null
    },
    fullName() {
      return this.userData.full_name ? this.userData.full_name : null
    },
    username() {
      return this.userData.name ? this.userData.name : null
    },
    profileUrl() {
      return this.username ? `/@${this.username}` : null
    },
    profileShareUrl() {
      return this.username ? `${process.env.urlShareDomain}/${this.username}` : null
    },
    photoUrl() {
      return this.userData.photo_url ? this.userData.photo_url : this.defaultPhotoUrl
    },
    usingDefaultPhotoUrl() {
      return this.photoUrl === this.defaultPhotoUrl
    },
    playlogCount() {
      return this.userData.playlog_count ? this.userData.playlog_count : null
    },
    truncatedPlaylogCount() {
      return this.truncateCount(this.playlogCount)
    },
    followCount() {
      return this.userData.follow_count ? this.userData.follow_count : null
    },
    truncatedFollowCount() {
      return this.truncateCount(this.followCount)
    },
    followerCount() {
      return this.userData.follower_count ? this.userData.follower_count : null
    },
    truncatedFollowerCount() {
      return this.truncateCount(this.followerCount)
    },
    socialConnections() {
      return this.userData.social_connections ? this.userData.social_connections : null
    }
  },
  methods: {
    async getFollowers(params) {
      return await this.$axios.get(`users/${this.username}/followers`, { params })
    },
    async getFollowing(params) {
      return await this.$axios.get(`users/${this.username}/follows`, { params })
    },
    async getLikes(params) {
      return await this.$axios.get(`users/${this.username}/likes`, { params })
    },
    async getPlaylogs(params) {
      return await this.$axios.get(`users/${this.username}/playlogs`, { params })
    },
  }
}
