import type { NuxtOptions } from '@nuxt/schema'

export default <Partial<NuxtOptions['app']['head']>>{
  htmlAttrs: {
    lang: 'ru-RU',
  },
  title: 'Алёна Тюрина (@alenaqqll) - Официальный сайт',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      charset: 'utf-8',
    },
    {
      name: 'robots',
      content: 'index, follow',
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
      content: 'Алёна Тюрина (@alenaqqll) - Официальный сайт',
    },
    {
      property: 'og:image',
      content: 'https://tyurinamusic.com/web/schema.jpg',
    },
    {
      property: 'og:description',
      content: 'Солистка Ульяновской государственной филармонии, педагог по вокалу. Лауреат международных конкурсов. Выступает с симфоническими, народными и джазовыми оркестрами.',
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
      rel: 'profile',
      href: 'https://gmpg.org/xfn/11',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-96x96.png?v=2.0',
      sizes: '96x96',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon/favicon.svg?v=2.0',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon/favicon.ico?v=2.0',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-touch-icon.png?v=2.0',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest?v=2.0',
    },
  ],
  style: [],
  script: [
    {
      key: 'schema:website',
      type: 'application/ld+json',
      innerHTML: `
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://tyurinamusic.com/#website",
  "name": "Алёна Тюрина - Официальный сайт",
  "url": "https://tyurinamusic.com/",
  "image": "https://tyurinamusic.com/web/schema.jpg",
  "about": {"@id": "https://tyurinamusic.com/#person"}
}
      `,
    },
    {
      key: 'schema:person',
      type: 'application/ld+json',
      innerHTML: `
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://tyurinamusic.com/#person",
  "name": "Алёна Тюрина",
  "description": "Солистка Ульяновской государственной филармонии, педагог по вокалу. Лауреат международных конкурсов. Выступает с симфоническими, народными и джазовыми оркестрами.",
  "skills": "Джазовый вокал, академическое пение, импровизация",
  "jobTitle": ["Солистка филармонии", "Педагог по вокалу", "Эстрадно-джазовая вокалистка"],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Музыкальное училище им. Г.И. Шадриной",
      "description": "Специальность: «Эстрадно-джазовое пение»",
      "award": "Диплом с отличием"
    },
    {
      "@type": "CollegeOrUniversity",
      "name": "Санкт-Петербургский институт культуры",
      "description": "Текущее место обучения"
    }
  ],
  "award": [
    "Гран-при и первые премии всероссийских и международных конкурсов (Ульяновск, Димитровград, Чебоксары, Казань, Санкт-Петербург)"
  ],
  "memberOf": [
    {
      "@type": "MusicGroup",
      "name": "Симфонический оркестр Ульяновской филармонии"
    },
    {
      "@type": "MusicGroup",
      "name": "Народный оркестр Ульяновской филармонии"
    }
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Ульяновская государственная филармония"
  },
  "sameAs": [
    "https://t.me/alenaqqll",
    "https://vk.com/tyurinamusic",
    "https://www.instagram.com/alenaqql"
  ],
  "homeLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ульяновск",
      "addressCountry": "Россия"
    }
  },
  "affiliation": {
    "@type": "EducationalOrganization",
    "name": "Санкт-Петербургский институт культуры",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Санкт-Петербург",
      "addressCountry": "Россия"
    }
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Диплом с отличием музыкальной школы",
    "educationalLevel": "Начальное музыкальное образование"
  }
}
      `,
    },
  ],
  noscript: [],
}
