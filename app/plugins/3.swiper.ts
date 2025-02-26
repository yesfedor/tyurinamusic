import { register } from 'swiper/element/bundle'

export default defineNuxtPlugin({
  name: 'deep:swiper',
  dependsOn: ['app:initialization'],

  async setup() {
    register()
  },
})
