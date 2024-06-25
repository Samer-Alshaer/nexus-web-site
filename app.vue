<template>
  <NuxtLayout name="da">
    <NuxtPage />
    <div
      class="mouse-cursor cursor-outer w-8 h-8 border border-l-gradientColorFrom border-t-gradientColorFrom border-r-gradientColorTo border-b-gradientColorTo ml-[-14px] mt-[-14px]"
    ></div>
    <div class="mouse-cursor cursor-inner w-1 h-1 bg-gradientColorFrom rounded-full z-50 pointer-events-none"></div>
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<script setup>
import mousecursor from "@/utils/mousecursor";

const locale = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});

onMounted(() => {
  mousecursor();
});
</script>
