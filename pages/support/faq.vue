<i18n lang="yaml">
en:
  page:
    title: Frequenty Asked Questions
  meta:
    description: "Find answers to all your questions related to the Playlog app."
</i18n>

<template>
  <div>
    <div class="footer-hero wide gradient-bg-duo-layer-faq wf-section">
      <div class="wrap-heading w50-center">
        <div class="_7-col">
          <div class="feature3-text-wrapper">
            <h1 class="heading-22">FAQ</h1>
            <h2 class="heading-26">
              Find answers to all your questions related to the Playlog app.
            </h2>
          </div>
        </div>
        <div class="_5-col">
          <h3 class="heading-27">FAQ Topics</h3>
          <a href="#FAQ-Account" class="header-menu-link w-clearfix"
            ><span class="faq-menu-icon"></span> Create and Manage an Account</a
          >
          <a href="#FAQ-Navigate" class="header-menu-link w-clearfix"
            ><span class="faq-menu-icon"></span> Navigate the Playlog App</a
          >
          <a href="#FAQ-Followers" class="header-menu-link w-clearfix"
            ><span class="faq-menu-icon"></span> How to Manage Followers</a
          >
          <a href="#FAQ-Comments" class="header-menu-link w-clearfix"
            ><span class="faq-menu-icon"></span> How to Manage Comments</a
          >
          <a href="#FAQ-Playlogs" class="header-menu-link w-clearfix"
            ><span class="faq-menu-icon"></span> How to Create Playlogs</a
          >
          <a href="#FAQ-Dictionary" class="header-menu-link w-clearfix"
            ><span class="faq-menu-icon"></span>Playlog Dictionary</a
          >
          <a href="#FAQ-Other" class="header-menu-link w-clearfix"
            ><span class="faq-menu-icon"></span>Other Questions</a
          >
        </div>
      </div>
    </div>
    <div id="FAQ-Account" class="faq-section">
      <div class="container">
        <div class="faq-title-wrap">
          <h3 class="heading-7">
            How to Create and Manage a Playlog
            <span class="gradient-text---p-b">Account</span>
          </h3>
        </div>
        <div class="column-wrapper">
          <div class="column">
            <faq-question>
              <template slot="question"> How do I use Playlog on mobile? </template>
              <template slot="content">
                First things first, get the<nuxt-link
                  :to="localePath('/download')"
                  target="_blank"
                >
                  Playlog app</nuxt-link
                >
                for iOS. It&#x27;s free! Once your download is complete, open the
                <span class="icon-in-text playlog-icon">co</span> icon and tap on
                <span class="text-emphasis-support-pages">Sign Up</span>. You will then be
                prompted to create your Playlog account.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question"> Updating my Playlog profile</template>
              <template slot="content">
                To change your display name, profile picture, description, or associated
                email, head to the
                <span class="icon-in-text profile-icon">cii</span> icon and tap on your
                profile picture. Once you&#x27;ve made the changes, tap
                <span class="text-emphasis-support-pages">Done</span> to save them or
                <span class="text-emphasis-support-pages">Cancel</span> to undo them.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">
                Can I use someone else&#x27;s registered trademark as a username?
              </template>
              <template slot="content">
                Not really, but there are plenty of usernames that are not registered
                trademarks so we are sure you will find one that is just right for you and
                your account&#x27;s needs.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">
                Someone else signed up with my email. What should I do?
              </template>
              <template slot="content">
                We are sorry to hear that. It is highly probable that someone signed up to
                Playlog with your email by accident. Please let us know about this matter
                via our
                <nuxt-link :to="localePath('/support/contact')">Contact Us</nuxt-link>
                page and we will help you as soon as we can. <br /><br />If you suspect
                that you previously created a Playlog account but forgot your password,
                simply tap on
                <span class="text-emphasis-support-pages">Forgot Password</span> to
                recover your account.
              </template>
            </faq-question>
          </div>
          <div class="column">
            <faq-question>
              <template slot="question">
                When does Playlog send push notifications to my device?
              </template>
              <template slot="content">
                You can expect to be notified when someone starts following you, or when
                someone likes or comments on any of your posts. We may also notify you
                about relevant changes to the app.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question"
                >I forgot my password, how can I log in?
              </template>
              <template slot="content">
                We&#x27;ve all been there, but not to worry. If you don&#x27;t remember
                your password, you can always tap on
                <span class="text-emphasis-support-pages">Forgot Password</span> when
                attempting to log in.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">How can I change my password? </template>
              <template slot="content">
                Navigate to the <span class="icon-in-text profile-icon">cii</span>
                <span></span>icon and tap on the
                <span class="icon-in-text user-settings-icon">co</span> located at the top
                right of the screen. This will display your account&#x27;s settings. Under
                Account, tap on
                <span class="text-emphasis-support-pages">Change Password</span>.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">How do I log out of Playlog?</template>
              <template slot="content">
                From the <span class="icon-in-text profile-icon">cii</span> icon, tap on
                the <span class="icon-in-text user-settings-icon">co</span> located at the
                top right of the screen. This will display your account&#x27;s settings.
                Under Account, tap on
                <span class="text-emphasis-support-pages">Log Out</span>.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">How can I delete my Playlog account?</template>
              <template slot="content">
                You can delete your account in two simple taps. Go to your Settings and
                then tap "Delete Account".
              </template>
            </faq-question>
          </div>
        </div>
      </div>
    </div>
    <div id="FAQ-Navigate" class="faq-section">
      <div class="container">
        <div class="faq-title-wrap">
          <h3 class="heading-7">
            How to <span class="gradient-text---b-g">Navigate</span> the Playlog App
          </h3>
        </div>
        <div class="column-wrapper">
          <div class="column">
            <faq-question>
              <template slot="question">Log In Screen</template>
              <template slot="content">
                Log into your Playlog account with your username or email and your
                password. If you don&#x27;t yet have an account with us, you can tap on
                <span class="text-emphasis-support-pages">Sign Up</span>. This will prompt
                you to choose a username, provide your email and choose a password.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">Discover Screen</template>
              <template slot="content">
                In <span class="icon-in-text discover-icon">co</span> you can view
                relevant content from creators you follow.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">Explore Screen</template>
              <template slot="content">
                In <span class="icon-in-text explore-icon">co</span> you can find all
                types of content from creators that you don&#x27;t follow. This is where
                you can search for posts by title, by creator, or by hashtag.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">Create Screen</template>
              <template slot="content">
                In <span class="icon-in-text create-icon">co</span> you can start creating
                and composing your own content.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">Profile Screen</template>
              <template slot="content">
                In <span class="icon-in-text profile-icon">cii</span> you can view and
                edit your Playlog profile. Tapping on
                <span class="icon-in-text following-icon">co</span> will display your
                followers and your follows, and tapping on the
                <span class="icon-in-text play-media-icon">co</span> will show your posts
                and the posts that you&#x27;ve liked.
              </template>
            </faq-question>
          </div>
          <div class="column">
            <faq-question>
              <template slot="question">Account Settings</template>
              <template slot="content">
                From <span class="icon-in-text profile-icon">cii</span> , tap on the
                <span class="icon-in-text user-settings-icon">co</span> at the top right.
                This will display your account settings, where you can change your
                password, log out, view our privacy policy and terms of service, and turn
                on in-app tutorials.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">Like Button</template>
              <template slot="content">
                The <span class="icon-in-text like-icon">co</span> shows the amount of
                likes on each post.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">Share Button</template>
              <template slot="content">
                Tapping on <span class="icon-in-text share-icon">co</span> will let you
                share posts to off-app channels.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">Comment Button</template>
              <template slot="content">
                The <span class="icon-in-text comment-icon">co</span> will display a
                post&#x27;s comment section.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">How to go back to a previous screen</template>
              <template slot="content">
                If you are watching a post, tap on
                <span class="icon-in-text back-icon">co</span> to return to the previous
                screen. Wherever the
                <span class="icon-in-text back-icon">co</span> isn&#x27;t visible, you can
                instead tap on <span class="icon-in-text x-icon">co</span> to go back.
              </template>
            </faq-question>
          </div>
        </div>
      </div>
    </div>
    <div id="FAQ-Followers" class="faq-section">
      <div class="container">
        <div class="faq-title-wrap">
          <h3 class="heading-7">
            How to Manage <span class="gradient-text---p-o">Followers</span>
          </h3>
        </div>
        <div class="column-wrapper">
          <div class="column">
            <faq-question>
              <template slot="question">How do I follow a Playlog account?</template>
              <template slot="content">
                In order to follow a creator, you must tap and hold their profile picture.
              </template>
            </faq-question>
          </div>
          <div class="column">
            <faq-question>
              <template slot="question">How do I unfollow a Playlog account?</template>
              <template slot="content">
                Tap on and hold the creator&#x27;s profile picture to unfollow a Playlog
                account. Alternately, you can navigate to
                <span class="icon-in-text profile-icon">cii</span>, go to
                <span class="icon-in-text following-icon">co</span>, tap on
                <span class="text-emphasis-support-pages">Following</span>, and then tap
                <span class="icon-in-text minus-icon">c</span>. Creators will only be
                notified when you follow them and not when you unfollow.
              </template>
            </faq-question>
          </div>
        </div>
      </div>
    </div>
    <div id="FAQ-Comments" class="faq-section">
      <div class="container">
        <div class="faq-title-wrap">
          <h3 class="heading-7">
            How to Manage <span class="gradient-text---b-g">Comments</span>
          </h3>
        </div>
        <div class="column-wrapper">
          <div class="column">
            <faq-question>
              <template slot="question">How do I leave a comment?</template>
              <template slot="content">
                When watching any post, you will notice a few icons on the top right.
                Tapping on <span class="icon-in-text comment-icon">co</span> will bring up
                the comment section. To publish your comment, simply tap on the comment
                box at the bottom of the screen, compose your message, and hit
                <span class="text-emphasis-support-pages">Post</span>.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">How to delete a comment</template>
              <template slot="content">
                You can delete your own comments and comments that others leave in your
                posts. Slide the comment that you wish to delete to the left and tap
                <span class="text-emphasis-support-pages">Delete</span>.
              </template>
            </faq-question>
          </div>
          <div class="column">
            <faq-question>
              <template slot="question">
                I deleted a comment by accident, can I undo this action?
              </template>
              <template slot="content">
                If you just deleted a comment by accident, you have the option to revert
                the changes by clicking on
                <span class="text-emphasis-support-pages">Undo</span>. However, the Undo
                option will disappear 3 seconds after you delete a comment so make sure to
                take action quickly!
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">How to report a comment</template>
              <template slot="content">
                There is no room for hateful comments in our community. Should you stumble
                upon an inappropriate comment, tap on
                <span class="icon-in-text vertical-dots-icon">co</span> and click on the
                type of report you wish to make. Tap
                <span class="text-emphasis-support-pages">Next</span> to write the details
                of your report (this is optional) and click
                <span class="text-emphasis-support-pages">Send</span> to submit your
                report.
              </template>
            </faq-question>
          </div>
        </div>
      </div>
    </div>
    <div id="FAQ-Playlogs" class="faq-section">
      <div class="container">
        <div class="faq-title-wrap">
          <h3 class="heading-7">
            How to <span class="gradient-text---o-y">Create</span> Content
          </h3>
        </div>
        <div class="column-wrapper">
          <div class="column">
            <faq-question>
              <template slot="question">How do I start creating a post?</template>
              <template slot="content">
                To begin creating, tap on
                <span class="icon-in-text create-icon">co</span> and then on
                <span class="icon-in-text media-gallery-icon">co</span>. Here, you will be
                able to select the videos or photos that you&#x27;d like to add into your
                creation timeline from your device&#x27;s gallery by tapping on
                <span class="text-emphasis-support-pages">Gallery</span>. You can also
                choose to add live photos or videos.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">How can I take live photos or videos?</template>
              <template slot="content">
                In <span class="icon-in-text media-gallery-icon">co</span>, tap on
                <span class="text-emphasis-support-pages">Camera</span>. Once you&#x27;ve
                captured your live photo or video, tap on
                <span class="text-emphasis-support-pages">Use Video</span> to add it to
                your Gallery. From Gallery, select the live photo or video that you just
                took to add it to your creation timeline.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">How can I set a duration for my photos?</template>
              <template slot="content">
                Now that you have selected the images you want to include in your
                composition, it’s time to decide how long you’d like them to appear on the
                screen. By default, all the images added are selected. You can distinguish
                this with the halo around the media item and the
                <span class="icon-in-text check-icon">co</span> next to the duration. Keep
                in mind that duration will automatically be added equally to each selected
                image. If you want each image to show for a different duration, you can
                deselect images by tapping on them in the timeline, and reselecting by
                doing the same action.<br /><br />You will see a
                <span class="icon-in-text record-icon">co</span> in the center of the
                screen, long press, drag right and hold it to add time. Holding it in
                position will record at a fixed speed. This speed is defined by how
                far-right you drag the recorder: the more right you drag and hold, the
                faster the record speed. To remove the durations, you can drag and hold
                left, with the same functionality as before.<br /><br />Once you have set
                the duration of your visuals, a
                <span class="icon-in-text check-icon">co</span> will appear to confirm the
                time. Tap it to add the selected duration to the desired media.<br /><br />When
                inserting a video, you won’t need to set the duration as the video clip
                already has its own.<br />
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">Switching between record and playback</template>
              <template slot="content">
                You can switch between record and playback mode by swiping up or down on
                the viewport. This can also be done if you are in the audio section.<br /><br />Tap
                on the <span class="icon-in-text mic-icon">co</span>, this will bring up
                the audio section. Tap again and it will close it. Now, a
                <span class="icon-in-text mic-record-icon">co</span> has appeared in the
                record button and tapping it will start an audio recording.<br />
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">How can I add voiceover?</template>
              <template slot="content">
                Fun! Adding voiceover really makes videos stand out. Once you have
                selected the images and/or videos you want to show, you can tap on
                <span class="icon-in-text mic-icon">co</span>. From here, press
                <span class="icon-in-text mic-record-icon">co</span> to record your
                voiceover and press it again when you are done recording.
              </template>
            </faq-question>
          </div>
          <div class="column">
            <faq-question>
              <template slot="question">
                Can I create content with voiceover but no visuals?
              </template>
              <template slot="content">
                For sure. If you want to create an audio-only video, we will automatically
                add a black box to your creation timeline.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">
                How to add a title and description to my post
              </template>
              <template slot="content">
                Once you have finished creating your video, tap on
                <span class="icon-in-text check-icon">co</span>. This will promp you to
                add a title and description. Be sure to include relevant hashtags for
                other users to find your content!
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">
                I accidentally closed the app without publishing my creation.
              </template>
              <template slot="content">
                It&#x27;s okay, whatever you were working on will automatically be saved.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">
                I don&#x27;t wish to continue editing, how can I delete my progress?
              </template>
              <template slot="content">
                If you are not pleased with your creation, tap on *x icon* located towards
                the botton left of your screen. Then, tap on
                <span class="text-emphasis-support-pages">Yes</span>.
              </template>
            </faq-question>
            <faq-question>
              <template slot="question">
                I&#x27;ve already published a post but want to delete it.
              </template>
              <template slot="content">
                In <span class="icon-in-text profile-icon">cii</span>, go to
                <span class="icon-in-text play-media-icon">co</span> and hold the post
                that you wish to erase from your profile. A pop up will appear, tap on
                <span class="icon-in-text trash-icon">co</span> to delete it.
              </template>
            </faq-question>
          </div>
        </div>
      </div>
    </div>
    <div id="FAQ-Dictionary" class="faq-section">
      <div class="container">
        <div class="faq-title-wrap">
          <h3 class="heading-7">
            Playlog <span class="gradient-text---p-o">Dictionary</span>
          </h3>
        </div>
        <div class="column-wrapper">
          <div class="column">
            <faq-question>
              <template slot="question">Players</template>
              <template slot="content">(noun) Playlog users. </template>
            </faq-question>
          </div>
          <div class="column">
            <faq-question>
              <template slot="question">Pitch us a new term!</template>
              <template slot="content">
                We are always looking to expand our Playlog lingo. If you have coined a
                new term, pitch it to us in our
                <a href="https://discord.com/invite/wkEBzjsTb2" target="_blank"
                  >Discord channel</a
                >.
              </template>
            </faq-question>
          </div>
        </div>
      </div>
    </div>
    <div id="FAQ-Other" class="faq-section">
      <div class="container">
        <div class="faq-title-wrap">
          <h3 class="heading-7">
            <span class="gradient-text---p-b">Other</span> Questions<span
              class="gradient-text---b-g"
            ></span>
          </h3>
        </div>
        <div class="column-wrapper">
          <div class="column">
            <faq-question>
              <template slot="question"
                >Why is Playlog unavailable in my region?</template
              >
              <template slot="content">
                We are working hard to become available worldwide, however due to global
                regulations, we can&#x27;t do that just yet. Playlog is actively working
                to translate our app to various languages. In order to deliver the best
                user experience on a worldwide scale, we must first iterate based on
                feedback we receive in our available regions.
              </template>
            </faq-question>
          </div>
          <div class="column">
            <faq-question>
              <template slot="question">
                What type of content isn&#x27;t allowed on Playlog?
              </template>
              <template slot="content">
                Playlog stands against harassment, bullying, harmful and hateful
                behaviour, violence, nudity, and illegal activities. Creating content that
                fits into any of these categories will result in getting banned.<br />
              </template>
            </faq-question>
          </div>
        </div>
      </div>
    </div>
    <div class="container-2 w-container"></div>
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
    };
  },
};
</script>

<style scoped>
@import "~/static/css/normalize.css";
@import "~/static/css/webflow.css";
@import "~/static/css/playlog.webflow.css";
</style>
