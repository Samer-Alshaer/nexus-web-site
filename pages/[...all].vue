<template>
  <div class="container pt-[150px]">
    <div
      class="bg-white dark:bg-color3 rounded-base p-5 mx-auto max-w-[600px] min-h-[400px] border border-borderColor flex flex-col items-center justify-center gap-5"
    >
      <!-- <h1 class="text-9xl text-black dark:text-white !leading-[.75]">
        <span
          class="relative before:w-[53px] before:bg-primary before:h-[.7rem] before:absolute before:top-[135px] before:right-[47px] before:rotate-90 before:translate-x-[53px]"
          >4</span
        >
        <span class="rtl:hidden">0</span>
        <span
          class="relative before:w-[53px] before:bg-green-700 before:h-[.7rem] before:absolute before:top-[135px] before:right-[47px] before:rotate-90 before:translate-x-[53px]"
          >4</span
        >
        <span class="ltr:hidden">0</span>
      </h1> -->
      <div class="font-normal dark:text-gray-400 text-lg capitalize">
        {{ $t("page_not_found") }}
      </div>

      <da-button
        @click="router.back()"
        class="min-w-[150px] capitalize"
      >
        {{ $t("back") }}
      </da-button>
    </div>
  </div>
</template>

<script setup>
const connfig = useRuntimeConfig();
const i18n = useI18n();
const router = useRouter();

useSeoMeta({
  title: `${i18n.t(connfig.public.SITE_NAME)} |  404`,
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
