import { mount, RouterLinkStub } from '@vue/test-utils'
import AndroidSupport from '~/pages/android-support'

import Meta from '~/mixins/meta'

describe('pages/android-support', () => {
  const wrapper = mount(AndroidSupport, {
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

  test('loads MailChimp external script', () => {
    expect(wrapper.vm.$data.script[0]).toStrictEqual({
      src: "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js",
      body: true,
    })
  })

  test('loads inline MailChimp script tag', () => {
    expect(wrapper.vm.$data.script[1]).toStrictEqual({
      type: "text/javascript",
      innerHTML:
        "(function ($) { " +
        "  window.fnames = new Array(); " +
        "  window.ftypes = new Array(); " +
        "  fnames[0] = `EMAIL`; " +
        "  ftypes[0] = `email`; " +
        "  fnames[1] = `FNAME`; " +
        "  ftypes[1] = `text`; " +
        "})(jQuery); " +
        "var $mcj = jQuery.noConflict(true);",
      body: true,
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
      script: [
        {
          src: "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js",
          body: true,
        },
        {
          type: "text/javascript",
          innerHTML:
            "(function ($) { " +
            "  window.fnames = new Array(); " +
            "  window.ftypes = new Array(); " +
            "  fnames[0] = `EMAIL`; " +
            "  ftypes[0] = `email`; " +
            "  fnames[1] = `FNAME`; " +
            "  ftypes[1] = `text`; " +
            "})(jQuery); " +
            "var $mcj = jQuery.noConflict(true);",
          body: true,
        },
      ],
    })
  })
})
