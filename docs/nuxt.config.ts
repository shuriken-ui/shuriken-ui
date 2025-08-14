export default defineNuxtConfig({
  // ssr: false,
  modules: [
    'reka-ui/nuxt',
    '@shuriken-ui/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    'nuxt-component-meta',
    '@nuxt/eslint',
    'nuxt-llms',
  ],
  css: ['~/assets/css/main.css'],
  content: {
    build: {
      markdown: {
        toc: { depth: 3, searchDepth: 3 },
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          },
        },
      },
    },
    renderer: {
      anchorLinks: true,
    },
  },
  llms: {
    domain: 'https://v4.shurikenui.com',
    title: 'Shuriken UI Documentation',
    description: 'Shuriken UI is a modern, responsive, and accessible UI library for Nuxt.js, built with Tailwind CSS and Reka UI.',
    full: {
      title: 'Shuriken UI Complete Documentation',
      description: 'Full documentation for Shuriken UI written in Markdown (MDC syntax).',
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-04-01',
  componentMeta: {
    metaSources: ['@shuriken-ui/nuxt-component-meta'],
    exclude: [
      // Disable parsing components in the project, only use static ones.
      () => true,
    ],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    optimizeDeps: {
      include: [
        'minisearch',
        'scule',
        'vue3-smooth-dnd',
        'vue3-apexcharts',
      ],
    },
  },
})
