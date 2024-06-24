import { defineStore } from "pinia";

export const useSiteOptions = defineStore("siteOptions", {
  state: () => ({
    mobileSidebarOpen: false,
  }),
});
