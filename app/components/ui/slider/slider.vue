<template>
  <div class="ui-slider">
    <swiper-container
      slides-per-view="1"
      speed="500"
      loop="true"
      mousewheel-force-to-axis="true"
      pagination="true"
      class="ui-slider__swiper"
    >
      <swiper-slide
        v-for="slide in slides"
        :key="slide.id"
        class="ui-slider__swiper-slide"
      >
        <div class="ui-slider__content">
          <img :src="getImagePath(slide.id)" :alt="slide.id" class="ui-slider__image">
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script lang="ts" setup>
type SlideItem = {
  id: string
}

function getImagePath(id: SlideItem['id']) {
  return `/web/r${id}.png`
}

const slides = ref<SlideItem[]>([
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
  { id: '10' },
  { id: '11' },
])
</script>

<style lang="scss">
@use 'sass:map';

.ui-slider {
  margin: 0 auto;
  padding: 0 12rem;
  max-width: 336rem;

  @include bp-tablet-min {
    max-width: 736rem;
    padding: 0 24rem;
  }

  @include bp-desktop-xs-min {
    max-width: 1170rem;
  }

  &__image {
    width: 100%;
    object-fit: contain;
    border-radius: 10rem;
  }

  &__swiper {
    --swiper-pagination-color: #{map.get($colors, 'button-bg')};
  }
}
</style>
