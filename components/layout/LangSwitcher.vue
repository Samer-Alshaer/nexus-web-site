<template>
  <ClientOnly>
    <div>
      <html :dir="locale === 'ar' ? 'rtl' : 'ltr'"></html>

      <div
        v-tooltip.bottom="$t('switch_lang')"
        @click="changeLang()"
        v-text="locale"
        :class="props.class"
        class="w-[40px] h-[40px] rounded-base shadow bg-slate-100/10 items-center justify-center cursor-pointer text-[16px] text-gray-400 dark:text-white font-semibold transition-all hover:scale-95 active:shadow-none"
      ></div>
    </div>
  </ClientOnly>
</template>

<script setup type="ts">
const { locale, setLocale } = useI18n();

const props = defineProps({
  class: {
    type: String,
    required: false,
  },
})

const changeLang = () => {
  const lang = locale.value === "en" ? "ar" : "en";
  setLocale(lang);

  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  langAttr(lang)
};

const langAttr =  (lang) => {
  useHead({
    htmlAttrs: {
      lang: lang,
    },
  });
}

const addDirToHtml = (l) => {
  l == "ar" ? document.documentElement.dir = "rtl" : document.documentElement.dir = "ltr"
}

onMounted(() => {
  const L = document.documentElement.dir == 'rtl' ? "ar" : "en";
  addDirToHtml(locale.value)
  langAttr(L);

})
</script>
