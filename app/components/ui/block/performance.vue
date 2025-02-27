<template>
  <div class="ui-block-performance">
    <div class="ui-block-performance__container">
      <h2 class="ui-block-performance__title">
        Оставить заявку
        на выступление
      </h2>
      <div class="ui-block-performance__action">
        <ui-button variant="secondary" @click="openLink">
          Оставить заявку
        </ui-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
function openLink() {
  window.open('https://vk.me/tyurinamusic', '_blank')
}
</script>

<style lang="scss">
@use 'sass:map';

.ui-block-performance {
  padding-top: 60rem;
  padding-bottom: 60rem;
  background: map.get($colors, 'performance-bg');

  &__container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30rem;

    @include px-container;

    @include bp-tablet-min {
      flex-direction: row;
    }
  }

  &__title {
    max-width: 232rem;
    color: map.get($colors, 'base');
    font-size: 20rem;
    line-height: 1.4em;
    font-weight: 600;
    text-transform: uppercase;
    flex: 50%;
    text-align: center;

    @include bp-tablet-min {
      max-width: 336rem;
      font-size: 32rem;
    }
  }

  &__action {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 50%;
  }
}
</style>
