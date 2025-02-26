<template>
  <button class="ui-button">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
@use 'sass:map';

.ui-button {
  padding: 16rem 24rem;
  font-size: 24rem;
  font-weight: 500;
  line-height: 22rem;
  border-radius: 10rem;
  text-align: center;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: map.get($colors, 'header-text');
  background: map.get($colors, 'navbar-link-active');
}
</style>
