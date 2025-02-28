import VueEasyLightbox from 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js'
import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css'

export default defineNuxtPlugin({
  name: 'deep:easy-lightbox',
  dependsOn: ['app:initialization'],

  async setup({ vueApp }) {
    vueApp.use(VueEasyLightbox)
  },
})
