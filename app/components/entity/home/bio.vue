<template>
  <div class="entity-home-bio">
    <div class="entity-home-bio__content" v-motion-slide-visible-once-left>
      <header class="entity-home-bio__header">
        <h1 class="entity-home-bio__title">Биография:</h1>
      </header>

      <div class="entity-home-bio__divider"></div>

      <p class="entity-home-bio__text">
        В музыке я столько, сколько себя помню. Как только родные заметили, что я ни дня не могу прожить без того, чтобы петь и сочинять — меня отдали в музыкальную школу. С тех пор музыка стала моей большой любовью, с которой я больше не расставалась. С отличием я окончила музыкальную школу, параллельно обучаясь игре на фортепиано и вокалу, а затем и Музыкальное училище им. Г. И. Шадриной по специальности «Эстрадно-джазовое пение». В настоящее время я продолжаю обучение в Санкт-Петербургском институте культуры. За время учёбы я нашла себя в самых разных жанрах, получила огромную концертную практику, стала обладательницей первых премий и Гран-при множества Всероссийских и Международных конкурсов в таких городах, как Ульяновск, Димитровград, Чебоксары, Казань и Санкт-Петербург.
      </p>
      <p class="entity-home-bio__text">
        В 17 лет я впервые спела с джазовым оркестром, а в 18 лет начала солировать с оркестрами Ульяновской государственной филармонии: с народным, симфоническим и духовым. Помимо оркестров выступаю сольно, с джаз-бендами и другими лучшими музыкальными коллективами города. Являюсь педагогом по вокалу. Гастролирую сольно, а также с оркестрами и музыкальными коллективами по всей России.
      </p>
    </div>
    <div class="entity-home-bio__image-container" v-motion-slide-visible-once-right>
      <img src="/web/bio.jpg" alt="Биография" class="entity-home-bio__image">
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
@use 'sass:map';

.entity-home-bio {
  margin: 0 auto;
  padding: 0 12rem;
  max-width: 336rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 20rem 0;
  grid-template-areas:
    '.'
    '.';
  position: relative;

  @include bp-tablet-min {
    max-width: 736rem;
    padding: 0 24rem;
  }

  @include bp-desktop-xs-min {
    max-width: 1170rem;
    grid-template-columns: 55% auto;
    grid-template-rows: 1fr;
    gap: 0 0;
    grid-template-areas: '. .';
  }

  &__content {
    width: 100%;
  }

  &__divider {
    margin-top: 16rem;
    width: 68rem;
    height: 1rem;
    position: relative;
    background: map.get($colors, 'navbar-link-active');

    @include bp-tablet-min {
      margin-top: 30rem;
    }
  }

  &__text {
    max-width: 535rem;
    margin-top: 16rem;
    font-size: 14rem;
    font-weight: 300;
    line-height: 1.7em;

    @include bp-tablet-min {
      margin-top: 30rem;
    }

    @include bp-desktop-xs-min {
      font-size: 16rem;
    }
  }

  &__image {
    object-fit: cover;
    object-position: center;
  }

  &__image-container,
  &__image {
    max-width: 100%;
    width: 100%;
    border-radius: 10rem;
    max-height: 320rem;

    @include bp-tablet-min {
      max-height: 640rem;
    }

    @include bp-desktop-xs-min {
      max-height: 100%;
    }
  }
}
</style>
