// vuetify.config.ts
import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

import { type ThemeDefinition } from "vuetify";

const adminTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#131122",
  },
};
const customerTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#000000",
  },
};

export default defineVuetifyConfiguration({
  /* vuetify options */
  theme: {
    defaultTheme: "admin",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#131122", // #E53935
        },
      },
      adminTheme,
      customerTheme,
    },
  },
});
