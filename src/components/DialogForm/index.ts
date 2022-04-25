import { App } from '@vue/runtime-dom'
import Component from './Index.vue'

export default {
  install (app: App) {
    app.component('AppDialogForm', Component)
  }
}
