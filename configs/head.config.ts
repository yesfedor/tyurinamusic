import type { NuxtOptions } from '@nuxt/schema'

export default <Partial<NuxtOptions['app']['head']>>{
  title: process.env.NUXT_BASE_TITLE,
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      charset: 'utf-8',
    },
    {
      name: 'description',
      content: String(process.env.NUXT_PUBLIC_APP_DESCRIPTION),
    },
    {
      name: 'author',
      content: String(process.env.NUXT_PUBLIC_APP_AUTHOR),
    },
    {
      name: 'theme-color',
      content: String(process.env.NUXT_PUBLIC_APP_THEME_COLOR),
    },
    {
      name: 'copyright',
      content: 'Алёна Тюрина',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Алёна Тюрина',
    },
    {
      name: 'application-name',
      content: 'Алёна Тюрина',
    },
    {
      name: 'msapplication-TileColor',
      content: '#ffffff',
    },
    {
      name: 'msapplication-config',
      content: '/favicon/browserconfig.xml?v=1.0',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
    {
      property: 'og:type',
      content: 'profile',
    },
    {
      property: 'og:title',
      content: 'Алёна Тюрина (@alenaqqll) - исполнительница, солистка филармонии',
    },
    {
      property: 'og:url',
      content: 'https://tyurinamusic.fiv.dev/',
    },
    {
      property: 'og:image',
      content: 'https://tyurinamusic.fiv.dev/web/bio.jpg',
    },
    {
      property: 'og:description',
      content: 'исполнительница, солистка филармонии',
    },
    {
      property: 'profile:first_name',
      content: 'Алёна',
    },
    {
      property: 'profile:last_name',
      content: 'Тюрина ',
    },
    {
      property: 'profile:username',
      content: 'alenaqqll',
    },
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: '/favicon/apple-touch-icon.png?v=1.0',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png?v=1.0',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png?v=1.0',
    },
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest?v=1.0',
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg?v=1.0',
      color: '#232323',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon/favicon.ico?v=1.0',
    },
  ],
  style: [],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: `
{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Алёна Тюрина (@alenaqqll) - исполнительница, солистка филармонии",
  "url": "https://tyurinamusic.fiv.dev/"
}
      `,
    },
    {
      type: 'application/ld+json',
      innerHTML: `
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Алёна Тюрина",
  "url": "https://tyurinamusic.fiv.dev/",
  "image": "https://tyurinamusic.fiv.dev/web/bio.jpg",
  "sameAs": [
    "https://t.me/alenaqqll",
    "https://vk.com/tyurinamusic",
    "https://www.instagram.com/alenaqql",
  ],
  "jobTitle": "Исполнительница"
}
      `,
    },
  ],
  noscript: [],
}
