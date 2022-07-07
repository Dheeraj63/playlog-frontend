import { mount, createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'

import Meta from '~/mixins/meta'

const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

describe('mixins/meta', () => {
  const wrapper = mount({ mixins: [ Meta ]}, {
    localVue,
    mocks: {
      $t: text => text,
    },
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('includes Meta mixin', () => {
    expect(wrapper.vm.$options.mixins).toContain(Meta)
  });

  test('renders SEO title tag with correct value', () => {
    expect(wrapper.vm.$metaInfo.title).toBe('page.title')
  });

  test('renders SEO description meta tag with correct value', () => {
    expect(wrapper.vm.$metaInfo.meta[0]).toStrictEqual({
      hid: "description",
      name: "description",
      content: "meta.description",
    })
  });

  test('renders SEO og:title meta tag with correct value', () => {
    expect(wrapper.vm.$metaInfo.meta[1]).toStrictEqual({
      hid: "og:title",
      name: "og:title",
      content: "page.title",
    })
  });

  test('renders SEO og:description meta tag with correct value', () => {
    expect(wrapper.vm.$metaInfo.meta[2]).toStrictEqual({
      hid: "og:description",
      name: "og:description",
      content: "meta.description",
    })
  });

  test('renders SEO twitter:title meta tag with correct value', () => {
    expect(wrapper.vm.$metaInfo.meta[3]).toStrictEqual({
      hid: "twitter:title",
      name: "twitter:title",
      content: "page.title",
    })
  });

  test('renders SEO twitter:description meta tag with correct value', () => {
    expect(wrapper.vm.$metaInfo.meta[4]).toStrictEqual({
      hid: "twitter:description",
      name: "twitter:description",
      content: "meta.description",
    })
  });

  test('does not include any unexpected link or script tags via data() method', () => {
    expect({ link: wrapper.vm.$data.link, script: wrapper.vm.$data.script }).toStrictEqual({
      link: [],
      script: []
    })
  });

  test('meta head() link array is empty', () => {
    expect(wrapper.vm.$metaInfo.link.length).toBe(0)
  });

  test('meta head() script array iss empty', () => {
    expect(wrapper.vm.$metaInfo.script.length).toBe(0)
  });
})
