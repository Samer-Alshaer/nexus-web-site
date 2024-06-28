<template>
  <ClientOnly>
    <div
      role="button"
      v-tooltip.bottom="
        $t('header.switch_theme', {
          theme: isDark ? $t('header.light') : $t('header.dark'),
        })
      "
      @click="isDark = !isDark"
      ref="themeToggler"
      class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center overflow-hidden"
    >
      <Icon
        v-show="isDark"
        name="line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition"
        class="w-5 h-5 text-white transition-all duration-1000"
        :class="{ 'theme-mode-animation': themeTogglerActive }"
      />
      <Icon
        v-show="!isDark"
        name="line-md:sunny-filled-loop"
        class="w-[20px] h-[20px] text-white transition-all duration-1000"
        :class="{ 'theme-mode-animation': themeTogglerActive }"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const themeTogglerActive = ref(false);

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    themeTogglerActive.value = true;
    setTimeout(() => {
      themeTogglerActive.value = false;
    }, 500);
  },
});
</script>
