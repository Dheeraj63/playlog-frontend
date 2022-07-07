import Vue from 'vue'
import Modal from './components/Modal.vue';

const eventBus = new Vue();

let openModals = 0;

const modalEvent = (eventName, modalName, params) => {
  switch(eventName) {
    case 'show':
      openModals = Math.max(0, openModals + 1);
      break;
    case 'hide':
      openModals = Math.max(0, openModals - 1);
      break;
    }

    if (process.client) {
      if (openModals === 0) {
        window.document.body.classList.remove('overflow-hidden');
      } else if (!window.document.body.classList.contains('overflow-hidden')) {
        window.document.body.classList.add('overflow-hidden');
      }
    }

    eventBus.$emit(`modal:${eventName}`, {
      ...params,
      modalName,
    })
    eventBus.$emit(`modal:${eventName}:${modalName}`, params);
}

export default {
  install(Vue, options) {
    Vue.component('Modal', Modal)

    Vue.prototype.$modal = {
      show: (modalName, params) => modalEvent('show', modalName, params),
      hide: (modalName, params) => modalEvent('hide', modalName, params),
      toggle: (modalName, params) => eventBus.$emit(`modal:toggle:${modalName}`, params),

      $on: (eventName, modalName, callback) => eventBus.$on(`modal:${eventName}:${modalName}`, callback),
      $off: (eventName, modalName, callback) => eventBus.$on(`modal:${eventName}:${modalName}`, callback),
    }
  }
}
