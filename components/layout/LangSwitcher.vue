<template>
  <ClientOnly>
    <div>
      <html :dir="locale === 'ar' ? 'rtl' : 'ltr'"></html>

      <div
        role="button"
        v-tooltip.bottom="$t('switch_lang')"
        @click="changeLang()"
        :class="props.class"
        class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-white dark:text-gray-20 hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center uppercase"
      >
        <span class="relative">
          <Icon name="ph:globe-simple-x" class="w-5 h-5" />
          <span
            class="absolute bg-darkColor h-[7px] bottom-0 right-[2px] flex items-center justify-center text-[9px] font-medium text-white"
          >
            {{ locale === "ar" ? "ع" : "E" }}
          </span>
        </span>
      </div>
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
