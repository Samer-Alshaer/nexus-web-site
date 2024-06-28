import i18nOptions from "./utils/i18n/options";
import primevueOptions from "./plugins/primevue/primevueOptions";
import colorModeOptions from "./utils/color-mode/options";
import aosOptions from "./utils/aos";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxtjs/i18n",
    "nuxt-primevue",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-aos",
    "nuxt-swiper",
    "nuxt-parallax"
  ],
  plugins: [{ src: "~/plugins/jquery", mode: "client" },],
  runtimeConfig: {
    public: {
      SITE_NAME: process.env.SITE_NAME,
      API_URL: process.env.API_URL,
    },
  },
  css: [
    "./assets/css/main.css",
    "primeicons/primeicons.css",
    "./assets/css/custom.css",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  components: {
    global: true,
    dirs: ["~/components/layout"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: i18nOptions,
  primevue: primevueOptions,
  colorMode: colorModeOptions,
  aos: aosOptions,
  googleFonts: {
    families: {
      "Josefin+Sans": true,
    },
  },
});
