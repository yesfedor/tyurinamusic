<template>
  <header class="app-footer">
    <div class="app-footer__first">
      <ui-block-performance />
    </div>
    <div class="app-footer__base">
      <div class="app-footer__container">
        <div class="app-footer__section --info">
          <h4 class="app-footer__title">Алёна Тюрина</h4>

          <ui-quote text="Музыка — высшее в мире искусство" author="— Лев Николаевич Толстой" />

          <ui-block-social />
        </div>
        <div class="app-footer__section --navigation">
          <h4 class="app-footer__title">Меню</h4>

          <layout-base-navigation />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
@use 'sass:map';

.app-footer {
  background: map.get($colors, 'footer-bg');

  &__base {
    @include px-container;
  }

  &__container {
    padding: 60rem 0;
    display: flex;
    flex-direction: column;
    gap: 24rem;

    @include bp-tablet-min {
      flex-direction: row;
      gap: 60rem;
    }
  }

  &__title {
    color: map.get($colors, 'footer-text');
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;

    @include bp-tablet-min {
      text-align: start;
    }
  }

  & .ui-quote {
    margin-top: 12rem;
    justify-content: flex-start;
    color: map.get($colors, 'footer-text');
  }

  & .ui-block-social {
    margin-top: 24rem;

    @include bp-desktop-xs-min {
      justify-content: flex-start;
    }
  }

  .--navigation {
    display: flex;
    align-items: center;
    flex-direction: column;

    @include bp-desktop-xs-min {
      align-items: flex-start;
    }
  }

  & .app-navigation {
    margin-top: 24rem;
    flex-direction: column;
    align-items: center;
    gap: 12rem;
    font-size: 16rem;

    @include bp-desktop-xs-min {
      margin-top: 24rem;
      align-items: flex-start;
    }
  }
}
</style>
