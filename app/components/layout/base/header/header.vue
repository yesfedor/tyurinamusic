<template>
  <header class="app-header">
    <div class="app-header__navigation">
      <layout-base-navigation />
    </div>
  </header>
</template>

<script setup lang="ts">

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
  color: map.get($colors, 'header-text');
  background: map.get($colors, 'header-bg');
  backdrop-filter: blur(4rem) brightness(0.45);
  z-index: 10;

  &__navigation {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
