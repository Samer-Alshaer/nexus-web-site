<template>
  <div>
    <NuxtLayout name="page-layout" pageTitle="about" headVisibility>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 place-items-center"
      >
        <logo class="w-[250px] md:w-[300px]" />
        <div class="lg:col-span-2">
          <h4 class="font-bold text-2xl text-black dark:text-white mb-3">
            {{ $t("dettaglioauto") }}
          </h4>
          <p class="text-sm text-black dark:text-white text-justify leading-7">
            {{ $t("about_text") }}
          </p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const connfig = useRuntimeConfig();
const i18n = useI18n();

useSeoMeta({
  title: `${i18n.t(connfig.public.SITE_NAME)} |  ${i18n.t("header.about")}`,
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});
</script>
