<template>
  <button
    :class="{
      [`ui-button--variant_${variant}`]: true,
    }"
    class="ui-button"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  variant?: 'primary' | 'secondary'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
})
</script>

<style lang="scss">
@use 'sass:map';

.ui-button {
  font-size: 20rem;
  font-weight: 600;
  line-height: 22rem;
  border-radius: 10rem;
  text-align: center;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &--variant_primary {
    padding: 18rem 20rem;
    color: map.get($colors, 'base');
    background: map.get($colors, 'navbar-link-active');

    &:hover,
    &:focus {
      color: map.get($colors, 'base');
      background: map.get($colors, 'navbar-link-active');
    }
  }

  &--variant_secondary {
    padding: 16rem 24rem;
    color: map.get($colors, 'base-text');
    background: map.get($colors, 'base');
    font-size: 18rem;
    border-radius: 24rem;

    @include bp-desktop-xs-min {
      padding: 24rem 32rem;
      font-size: 24rem;
    }

    &:hover,
    &:focus {
      color: map.get($colors, 'base');
      background: map.get($colors, 'base-text');
    }
  }
}
</style>
