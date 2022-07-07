import { mount, RouterLinkStub } from '@vue/test-utils'
import PrideCampaign from '~/pages/pride-campaign'

import Meta from '~/mixins/meta'

describe('pages/pride-campaign', () => {
  const wrapper = mount(PrideCampaign, {
    mocks: {
      $t: text => text,
      $i18n: { locale: 'en' },
      localePath: path => path
    },
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  });

  // test('uses default layout', () => {
  //   expect(wrapper.vm.layout).toBe('default')
  // });

  test('includes Meta mixin', () => {
    expect(wrapper.vm.$options.mixins).toContain(Meta)
  });

  test('includes correct preload tag for frame image', () => {
    expect(wrapper.vm.$data.link[0]).toStrictEqual({
      rel: "preload",
      as: "image",
      type: "image/svg+xml",
      href: "/images/Frame-8.svg",
    })
  })

  test('includes correct preload tag for frame image', () => {
    expect(wrapper.vm.$data.link[1]).toStrictEqual({
      rel: "preload",
      as: "image",
      href: "/images/Phone-Trio.png",
    })
  })

  test('does not include any unexpected link or script tags', () => {
    expect({ link: wrapper.vm.$data.link, script: wrapper.vm.$data.script }).toStrictEqual({
      link: [
        {
          rel: "preload",
          as: "image",
          type: "image/svg+xml",
          href: "/images/Frame-8.svg",
        },
        {
          rel: "preload",
          as: "image",
          href: "/images/Phone-Trio.png",
        },
      ],
      script: []
    })
  })
})
