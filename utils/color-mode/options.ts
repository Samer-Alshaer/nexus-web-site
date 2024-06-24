
const colorModeOptions = {
  preference: "system", // default value of $colorMode.preference
  fallback: "dark", // fallback value if not system preference found
  hid: "nuxt-color-mode-script",
  globalName: "__NUXT_COLOR_MODE__",
  componentName: "ColorScheme",
  classPrefix: "",
  classSuffix: "",
  storageKey: "da-theme-mode",
};

export default colorModeOptions;
