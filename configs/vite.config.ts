import type { NuxtOptions } from '@nuxt/schema'

export default <Partial<NuxtOptions['vite']>> {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '~/assets/stylesheets/abstracts/mixins' as *;
          @use '~/assets/stylesheets/abstracts/variables' as *;
        `,
      },
    },
  },
  optimizeDeps: {
    include: ['jsdoc-type-pratt-parser'],
  },
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      protocol: 'ws',
      host: '0.0.0.0',
    },
  },
}
