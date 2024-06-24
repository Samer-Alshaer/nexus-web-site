<template>
  <ClientOnly>
    <div
      v-tooltip.bottom="
        $t('header.switch_theme', {
          theme: isDark ? $t('header.light') : $t('header.dark'),
        })
      "
      @click="isDark = !isDark"
      ref="themeToggler"
      class="group overflow-hidden flex w-10 h-10 rounded-base shadow bg-slate-100/10 items-center justify-center cursor-pointer transition-all hover:scale-95 active:shadow-none"
    >
      <Icon
        v-show="isDark"
        name="line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition"
        class="w-5 h-5 dark:text-white text-black transition-all duration-1000"
        :class="{ 'theme-mode-animation': themeTogglerActive }"
      />
      <Icon
        v-show="!isDark"
        name="line-md:sunny-filled-loop"
        class="w-[20px] h-[20px] dark:text-white text-gray-400 transition-all duration-1000"
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
