<i18n lang="yaml">
en:
  page:
    title: Terms of Service | Playlog
  meta:
    description: "These Terms of Service govern your use of the Playlog website and app, and other services offered by Playlog, as well as services offered through third parties integrating Playlog functionality."
  contentComponent: En
ja:
  page:
    title: 利用規約 | Playlog
  contentComponent: Ja
ko:
  page:
    title: 이용 약관 | Playlog
  contentComponent: Ko
zh-cn:
  page:
    title: 服务条款 | Playlog
  contentComponent: ZhCn
zh-tw:
  page:
    title: 服務條款 | Playlog
  contentComponent: ZhTw
</i18n>

<template>
  <component :is="$t('contentComponent')" />
</template>

<script>
import En from "~/components/_marketing/terms-of-service/en";
import Ja from "~/components/_marketing/terms-of-service/ja";
import Ko from "~/components/_marketing/terms-of-service/ko";
import ZhCn from "~/components/_marketing/terms-of-service/zh-cn";
import ZhTw from "~/components/_marketing/terms-of-service/zh-tw";

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
