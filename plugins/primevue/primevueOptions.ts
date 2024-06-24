// primevueOptions.ts

const primevueOptions = {
  usePrimeVue: true,
  options: {
    unstyled: false,
  },
  components: {
    include: "*",
    exclude: ["Editor", "Chart"],
  },
  directives: {
    include: "*",
  },

  importPT: { as: "Lara", from: "~/plugins/primevue/presets/lara" },
};

export default primevueOptions;
