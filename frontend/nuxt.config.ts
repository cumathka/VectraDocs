import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false, // SPA mode for easy static deployment on Vercel / Netlify
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'VectraDocs — Secure, Privacy-First & AI-Powered Document Management',
      meta: [
        { name: 'description', content: 'Professional AI document management platform with zero-leak multi-tenant isolation and RAG search.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
