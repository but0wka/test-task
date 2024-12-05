// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@vee-validate/nuxt'],
  css: ['~/assets/css/main.css'],
});
