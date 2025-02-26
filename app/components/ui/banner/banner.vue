<template>
  <div class="ui-banner">
    <div class="ui-banner__background-container">
      <img
        src="/web/banner.jpg"
        alt="Алёна Тюрина - исполнительница, солистка филармонии"
        class="ui-banner__background-image"
      >
    </div>
    <div class="ui-banner__content">
      <h1 class="ui-banner__title">АЛЁНА ТЮРИНА</h1>

      <h3 class="ui-banner__subtitle">исполнительница, солистка филармонии</h3>

      <ui-quote
        text="Цель музыки — трогать сердца."
        author="Иоганн Себастьян Бах"
      />

      <ui-block-social />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
@use 'sass:map';

.ui-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: map.get($colors, 'base');
  z-index: 0;

  &__background-container {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: brightness(0.45);
    user-select: none;
  }

  &__background-image {
    object-fit: cover;
    object-position: top;

    @include bp-desktop-xs-min {
      object-position: 0% 35%;
    }
  }

  &,
  &__background-container,
  &__background-image {
    width: 100%;
    aspect-ratio: 3 / 5;
    min-height: 600rem;
    max-height: 100vh;

    @include bp-tablet-min {
      aspect-ratio: 3 / 4;
    }

    @include bp-desktop-xs-min {
      aspect-ratio: 16 / 9;
      max-height: 100vh;
    }
  }

  &__content {
    max-width: 768rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12rem;
    position: absolute;
    content: '';
    top: calc(var(--header-height) * 2);
    left: 24rem;
    right: 14rem;
    bottom: 0;
    z-index: 1;

    @include bp-tablet-min {
      left: auto;
      right: auto;
    }

    @include bp-desktop-xs-min {
      top: calc(var(--header-height) * 3);
    }
  }

  &__title {
    color: map.get($colors, 'base');
    font-size: 48rem;
    font-weight: 400;
    text-align: center;

    @include bp-tablet-min {
      font-size: 56rem;
    }

    @include bp-desktop-xs-min {
      font-size: 60rem;
    }
  }

  &__subtitle {
    margin-top: 0;
    color: map.get($colors, 'base');
    font-size: 18rem;
    font-weight: 500;
    text-align: center;

    @include bp-tablet-min {
      font-size: 22rem;
    }

    @include bp-desktop-xs-min {
      margin-top: 24rem;
      font-size: 24rem;
    }
  }

  .ui-quote {
    width: 100%;
    margin-top: 12rem;
  }

  .ui-block-social {
    width: 100%;
    margin-top: 24rem;

    @include bp-tablet-min {
      margin-top: 24rem;
    }
  }
}
</style>
