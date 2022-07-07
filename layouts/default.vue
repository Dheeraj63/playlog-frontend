<template>
  <div>
    <mega-menu />
    <nuxt />
    <footer-menu />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "preload",
          as: "image",
          type: "image/svg+xml",
          href: "/images/PlayLog-logo-lockup-grey.svg",
        },
      ],
    };
  },
};
</script>
