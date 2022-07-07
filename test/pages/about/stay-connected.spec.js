import { mount, RouterLinkStub } from '@vue/test-utils'
import StayConnected from '~/pages/about/stay-connected'

import Meta from '~/mixins/meta'

describe('pages/about/stay-connected', () => {
  const wrapper = mount(StayConnected, {
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

  test('includes correct preload tag for header image', () => {
    expect(wrapper.vm.$data.link[0]).toStrictEqual({
      rel: "preload",
      as: "image",
      type: "image/svg+xml",
      href: "/images/PlayBrush-Gradient-Colour-Overlays-05-02-02.svg",
    })
  })

  test('does not include any unexpected link or script tags', () => {
    expect({ link: wrapper.vm.$data.link, script: wrapper.vm.$data.script }).toStrictEqual({
      link: [
        {
          rel: "preload",
          as: "image",
          type: "image/svg+xml",
          href: "/images/PlayBrush-Gradient-Colour-Overlays-05-02-02.svg",
        },
      ],
      script: []
    })
  })
})
