<script lang="ts" setup>
const error = useError()
const runtimeConfig = useRuntimeConfig()
const canShowReallyError = computed(() => {
  return error.value?.statusCode && runtimeConfig.public.APP_DEBUG && error.value?.statusCode !== 404
})
</script>

<template>
  <div class="app-root app-root--error">
    <nuxt-route-announcer />
    <vite-pwa-manifest />

    <nuxt-layout name="default">
      <template v-if="canShowReallyError">
        <pre
          v-if="error"
          style="white-space: pre-line;"
        >
          [VueRouterError]: {{ error.message }}
        </pre>
      </template>
      <div v-else>
        <h1>404 Ничего не найдено</h1>
      </div>
    </nuxt-layout>

    <core-scope />
  </div>
</template>
