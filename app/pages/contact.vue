<template>
  <div class="app-page-contact">
    <div class="app-page-contact__banner">
      <ui-banner />
    </div>

    <div class="app-page-contact__container">
      <div class="app-page-contact__links">
        <h2 class="app-page-contact__title">Контакты</h2>

        <a
          v-for="link in links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          class="app-page-contact__links-item"
        >
          <div class="app-page-contact__links-item-row">
            <icon
              :name="link.icon"
              mode="svg"
              class="app-page-contact__links-icon"
            />

            <span class="app-page-contact__links-item-text">
              {{ link.text }}
            </span>
          </div>
        </a>
      </div>

      <ui-slider />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface LinkItem {
  icon: string
  url: string
  text: string
}

const links = ref<LinkItem[]>([
  {
    icon: 'asset:phone',
    url: 'tel:+79622888873',
    text: '+7-962-288-88-73',
  },
  {
    icon: 'asset:envelope',
    url: 'mailto:tyurinamusic@yandex.ru',
    text: 'tyurinamusic@yandex.ru',
  },
  {
    icon: 'asset:telegram',
    url: 'https://t.me/shilimowalex',
    text: '@shilimowalex',
  },
])
</script>

<style lang="scss">
@use 'sass:map';

.app-page-contact {
  &__container {
    margin-bottom: 80rem !important;
    @include px-container;
  }

  &__links {
    margin: 0 auto;
    padding: 80rem 0;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 48rem;
  }

  &__title {
    width: auto;
    text-align: center;
  }

  &__links-item {
    display: flex;
    align-items: center;
    font-weight: 500;
    text-decoration: none;
    color: map.get($colors, 'base-text');
  }

  &__links-item-row {
    display: flex;
    align-items: center;
    gap: 36rem;
  }

  &__links-icon {
    &,
    & > * {
      fill: map.get($colors, 'navbar-link-active') !important;
    }
  }

  &__links-item-text {
    font-size: 18rem;

    @include bp-desktop-xs-min {
      font-size: 24rem;
    }
  }
}
</style>
