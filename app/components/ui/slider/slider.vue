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
        <on-long-press :options="{ delay: 500 }" as="div" @trigger="showLightboxImage(slide.id)">
          <div class="ui-slider__content">
            <img :src="getImagePath(slide.id)" :alt="slide.id" class="ui-slider__image">
          </div>
        </on-long-press>
      </swiper-slide>
    </swiper-container>

    <vue-easy-lightbox
      :visible="lightboxVisibleRef"
      :imgs="lightboxImages"
      :index="lightboxIndexRef"
      @hide="onHide"
    />
  </div>
</template>

<script lang="ts" setup>
import { OnLongPress } from '@vueuse/components'

type SlideItem = {
  id: string
  path: string
}

function getImagePath(id: SlideItem['id']) {
  return `/web/r${id}.png`
}

const slides = ref<SlideItem[]>([
  { id: '1', path: getImagePath('1') },
  { id: '2', path: getImagePath('2') },
  { id: '3', path: getImagePath('3') },
  { id: '4', path: getImagePath('4') },
  { id: '5', path: getImagePath('5') },
  { id: '6', path: getImagePath('6') },
  { id: '7', path: getImagePath('7') },
  { id: '8', path: getImagePath('8') },
  { id: '9', path: getImagePath('9') },
  { id: '10', path: getImagePath('10') },
  { id: '11', path: getImagePath('11') },
])

const lightboxVisibleRef = ref(false)
const lightboxIndexRef = ref(0)
const lightboxImages = slides.value.map((item) => {
  return {
    src: item.path,
    title: item.id,
  }
})

function showLightboxImage(index: string) {
  lightboxIndexRef.value = Number(index)
  lightboxVisibleRef.value = true
}

function onHide() {
  lightboxVisibleRef.value = false
}
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

.vel-modal {
  .toolbar-btn__rotate {
    display: none;
  }
}
</style>
