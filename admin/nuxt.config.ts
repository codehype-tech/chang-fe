// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  extends: ["@jaizen/base"],
  runtimeConfig: {
    // Private variables (only available on server-side)
    secretApiKey: process.env.SECRET_API_KEY,

    // Public variables (available on client-side via `useRuntimeConfig()`)
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      appName: process.env.PUBLIC_APP_NAME,
    },
  },
  css: ["@jaizen/base/app/assets/styles/global.scss"],
  vite: {
    server: {
      hmr: {
        port: 24677,
      },
    },
    css: {
      preprocessorOptions: {
        sass: {
          api: "modern",
        },
        scss: {
          additionalData: `@use "@jaizen/base/app/assets/styles/global.scss" as *;`, // Use alias for brevity
        },
      },
    },
  },
  components: true,
  i18n: {
    langDir: "assets/locales/",
    locales: [
      { name: "English", code: "en", iso: "en-US", file: "en.json" },
      { name: "ไทย", code: "th", iso: "th-TH", file: "th.json" },
    ],
    defaultLocale: "th",
    detectBrowserLanguage: false,
  },
  future: {
    compatibilityVersion: 4,
  },
  pinia: {
    storesDirs: ["./app/stores/**"],
  },
  devServer: {
    port: parseInt(process.env.ADMIN_PORT!, 10) || 3010,
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "adminTheme",
      },
    },
  },
});
