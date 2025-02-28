<template>
  <div class="app-page-home">
    <div class="app-page-home__banner">
      <ui-banner />
    </div>

    <div class="app-page-home__bio">
      <entity-home-bio />
    </div>

    <div class="app-page-home__slider">
      <ui-slider />
    </div>

    <div class="app-page-home__action-row">
      <ui-button @click="download">Скачать репертуар</ui-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  meta: [
    {
      property: 'og:url',
      content: 'https://tyurinamusic.com/',
    },
  ],
  link: [
    {
      key: 'canonical',
      rel: 'canonical',
      href: 'https://tyurinamusic.com',
    },
    {
      key: 'shortlink',
      rel: 'shortlink',
      href: 'https://tyurinamusic.com',
    },
  ],
  script: [
    {
      key: 'schema:breadcrumbs',
      type: 'application/ld+json',
      innerHTML: `
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Биография",
      "item": "https://tyurinamusic.com/"
    }
  ]
}
      `,
    },
  ],
})

function download() {
  window.open('/web/Репертуар-2025.pdf', '_blank')
}
</script>

<style lang="scss">
.app-page-home {
  &__bio,
  &__slider {
    margin-top: 40rem;

    @include bp-tablet-min {
      margin-top: 60rem;
    }

    @include bp-desktop-xs-min {
      margin-top: 80rem;
    }
  }

  &__action-row {
    margin-top: 40rem;
    text-align: center;
    margin-bottom: 40rem;
  }
}
</style>
