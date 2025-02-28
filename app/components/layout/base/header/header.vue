<template>
  <header
    :class="{
      'app-header--with-banner': bannerVisible,
    }"
    class="app-header"
  >
    <div class="app-header__navigation">
      <layout-base-navigation />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'

const bannerRef = ref<HTMLElement | null>(null)
const bannerVisible = ref(false)

const observer = useElementVisibility(bannerRef, {
  // Определяем момент, когда считаем элемент видимым
  threshold: 0.1,

  // Добавляем отступ для раннего обнаружения
  rootMargin: '0px 0px 0px 0px',
})

watch(observer, (value) => {
  bannerVisible.value = value
})

function setBannerRef() {
  nextTick(() => {
    bannerRef.value = document.querySelector('#js-banner')
  })
}

onMounted(() => {
  setBannerRef()
})

const router = useRouter()
watch(router.currentRoute, (value, oldValue) => {
  if (value.name === oldValue.name) {
    return false
  }
  setBannerRef()
})
</script>

<style lang="scss">
@use 'sass:map';

html {
  --header-height: 68rem;
}

.app-header {
  padding: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: map.get($colors, 'header-bg');
  backdrop-filter: blur(4rem);
  border-bottom: 1rem solid map.get($colors, 'base');
  opacity: 0;
  transition:
    opacity 400ms,
    background 200ms,
    color 200ms,
    border-bottom 200ms,
    backdrop-filter 200ms;
  z-index: 10;

  &__navigation {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--with-banner {
    opacity: 1;
  }
}
</style>
