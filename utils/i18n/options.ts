
const i18nOptions = {
  locales: [
    { code: "en", iso: "en-US", name: "English", file: "en.json" },
    { code: "ar", iso: "ar-AR", name: "Arabic", file: "ar.json" },
  ],
  defaultLocale: "ar",
  strategy: "prefix_and_default",
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "da-locale",
  },
  lazy: true,
  langDir: "../../locales",
};

export default i18nOptions;
