import { mount, RouterLinkStub } from '@vue/test-utils'
import Download from '~/pages/download'

import Meta from '~/mixins/meta'

describe('pages/download', () => {
  const wrapper = mount(Download, {
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
      href: "/images/Group-73.png",
    })
  })

  test('does not include any unexpected link or script tags', () => {
    expect({ link: wrapper.vm.$data.link, script: wrapper.vm.$data.script }).toStrictEqual({
      link: [
        {
          rel: "preload",
          as: "image",
          href: "/images/Group-73.png",
        },
      ],
      script: []
    })
  })
})
