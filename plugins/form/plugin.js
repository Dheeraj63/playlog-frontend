import Form from './components/Form'
import TextField from './components/TextField'
import TextArea from './components/TextArea'
import Submit from './components/Submit'

export default {
  install(Vue, options) {
    Vue.component('Form', Form)
    Vue.component('TextField', TextField)
    Vue.component('TextArea', TextArea)
    Vue.component('Submit', Submit)

    // Vue.prototype.$form = {
    //   show: (modalName, params) => modalEvent('show', modalName, params),
    //   hide: (modalName, params) => modalEvent('hide', modalName, params),
    //   toggle: (modalName, params) => eventBus.$emit(`modal:toggle:${modalName}`, params),

    //   $on: (eventName, modalName, callback) => eventBus.$on(`modal:${eventName}:${modalName}`, callback),
    //   $off: (eventName, modalName, callback) => eventBus.$on(`modal:${eventName}:${modalName}`, callback),
    // }
  }
}
