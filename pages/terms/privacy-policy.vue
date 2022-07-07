<i18n lang="yaml">
en:
  page:
    title: Privacy Policy | Playlog
  meta:
    description: "We respect our user's privacy rights and are committed to protecting their data. Learn more about how Playlog uses the information collected on our users."
  contentComponent: En
ja:
  page:
    title: プライバシーポリシー | Playlog
  contentComponent: Ja
ko:
  page:
    title: 개인정보 보호정책 | Playlog
  contentComponent: Ko
zh-cn:
  page:
    title: 隐私政策
  contentComponent: ZhCn
zh-tw:
  page:
    title: 隱私權政策
  contentComponent: ZhTw
</i18n>

<template>
  <component :is="$t('contentComponent')" />
</template>

<script>
import En from "~/components/_marketing/privacy-policy/en";
import Ja from "~/components/_marketing/privacy-policy/ja";
import Ko from "~/components/_marketing/privacy-policy/ko";
import ZhCn from "~/components/_marketing/privacy-policy/zh-cn";
import ZhTw from "~/components/_marketing/privacy-policy/zh-tw";

import Meta from "~/mixins/meta";

export default {
  components: {
    En,
    Ja,
    Ko,
    ZhCn,
    ZhTw,
  },
  mixins: [Meta],
};
</script>
