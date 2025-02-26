<template>
  <nav class="app-navigation">
    <nuxt-link
      v-for="link in menu"
      :key="link.to"
      :to="link.to"
      class="app-navigation__item"
    >
      {{ link.label }}
    </nuxt-link>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

type MenuItem = {
  to: string
  label: string
}

const menu = ref<MenuItem[]>([
  {
    to: localePath({ name: 'index' }),
    label: 'Главная',
  },
  {
    to: localePath({ name: 'contact' }),
    label: 'Контакты',
  },
])
</script>

<style lang="scss">
@use 'sass:map';

.app-navigation {
  display: flex;
  align-items: center;
  gap: 36rem;
  font-size: 14rem;
  font-weight: 500;

  &__item {
    color: map.get($colors, 'header-text');
    text-decoration: unset;
    text-transform: uppercase;
    transition: color 400ms;

    &.router-link-active,
    &:hover,
    &:active,
    &:focus {
      color: map.get($colors, 'navbar-link-active');
    }
  }
}
</style>
