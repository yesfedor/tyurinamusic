import { MotionPlugin } from '@vueuse/motion'

export default defineNuxtPlugin({
  name: 'deep:motion',
  dependsOn: ['app:initialization'],

  async setup({ vueApp }) {
    vueApp.use(MotionPlugin)
  },
})
