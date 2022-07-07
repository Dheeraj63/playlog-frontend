import { mount, RouterLinkStub } from '@vue/test-utils'
import PrivacyPolicy from '~/pages/terms/privacy-policy'

import En from "~/components/_marketing/privacy-policy/en";
import Ja from "~/components/_marketing/privacy-policy/ja";
import Ko from "~/components/_marketing/privacy-policy/ko";
import ZhCn from "~/components/_marketing/privacy-policy/zh-cn";
import ZhTw from "~/components/_marketing/privacy-policy/zh-tw";

import Meta from '~/mixins/meta'

describe('pages/terms/privacy-policy', () => {
  const wrapper = mount(PrivacyPolicy, {
    mocks: {
      $t: text => text,
      $i18n: { locale: 'en' },
      localePath: path => path
    },
    stubs: {
      NuxtLink: RouterLinkStub,
      contentComponent: true
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  });

  // test('uses default layout', () => {
  //   expect(wrapper.vm.layout).toBe('default')
  // });

  test('includes En i18n localized content component', () => {
    expect(wrapper.vm.$options.components.En).toStrictEqual(En)
  });

  test('includes Ja i18n localized content component', () => {
    expect(wrapper.vm.$options.components.Ja).toStrictEqual(Ja)
  });

  test('includes Ko i18n localized content component', () => {
    expect(wrapper.vm.$options.components.Ko).toStrictEqual(Ko)
  });

  test('includes ZhCn i18n localized content component', () => {
    expect(wrapper.vm.$options.components.ZhCn).toStrictEqual(ZhCn)
  });

  test('includes ZhTw i18n localized content component', () => {
    expect(wrapper.vm.$options.components.ZhTw).toStrictEqual(ZhTw)
  });

  test('includes Meta mixin', () => {
    expect(wrapper.vm.$options.mixins).toContain(Meta)
  });

  test('does not include any unexpected link or script tags', () => {
    expect({ link: wrapper.vm.$data.link, script: wrapper.vm.$data.script }).toStrictEqual({
      link: [],
      script: []
    })
  })
})
