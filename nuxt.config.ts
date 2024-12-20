// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["@/assets/style/style.scss"],
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  modules: ["@nuxtjs/i18n"],

  i18n: {
    locales: [
      { code: "tm", name: "Türkmençe", iso: "tm-TM", file: "tm.json" },
      { code: "ru", name: "Русский", iso: "ru-RU", file: "ru.json" },
      { code: "en", name: "English", iso: "en-US", file: "en.json" },
    ],
    defaultLocale: "tm",
    lazy: true, // Dil dosyalarını lazy loading ile yükler
    langDir: "locales/", // Dil dosyalarının bulunduğu dizin
    // vueI18n: {
    //   fallbackLocale: "en",
    // },
  },
});
