<template>
  <div class="ui-block-social">
    <a
      v-for="link in social"
      :key="link.url"
      :href="link.url"
      :title="link.title"
      target="_blank"
      class="ui-block-social__item"
    >
      <icon :name="link.icon" />
    </a>
  </div>
</template>

<script lang="ts" setup>
type SocialItem = {
  url: string
  icon: string
  title: string
}

const social = ref<SocialItem[]>([
  {
    url: 'https://t.me/alenaqqll',
    icon: 'asset:telegram-plane',
    title: 'telegram',
  },
  {
    url: 'https://vk.com/tyurinamusic',
    icon: 'asset:vk',
    title: 'vk',
  },
  {
    url: 'https://wa.me/79622888873',
    icon: 'asset:whatsapp',
    title: 'whatsapp',
  },
])
</script>

<style lang="scss">
@use 'sass:map';

.ui-block-social {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24rem;

  &__item {
    padding: 8rem;

    &,
    &:hover,
    &:active,
    &:focus {
      color: map.get($colors, 'button-bg');
      font-size: 20rem;

      @include bp-tablet-min {
        font-size: 24rem;
      }

      @include bp-desktop-xs-min {
        font-size: 28rem;
      }
    }
  }
}
</style>
