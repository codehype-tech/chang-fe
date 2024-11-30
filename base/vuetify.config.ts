// vuetify.config.ts
import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

export default defineVuetifyConfiguration({
  /* vuetify options */
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#404DFF", // #E53935
        },
      },
    },
  },
});
