<template>
  <div>
    <!-- <NuxtLayout name="page-layout" pageTitle="faqs" headVisibility>
      <Accordion
        :activeIndex="0"
        expandIcon="pi pi-plus"
        collapseIcon="pi pi-minus"
      >
        <AccordionTab
          v-for="tab in sortedTabs"
          :key="tab.id"
          :header="tab.title"
        >
          <p class="m-0 text-sm text-black dark:text-white leading-7">
            {{ tab.content }}
          </p>
        </AccordionTab>
      </Accordion>
     
    </NuxtLayout> -->
  </div>
</template>

<script setup>
// import tabsData from "~/data/faqs.json";

const connfig = useRuntimeConfig();
const i18n = useI18n();

// const sortedTabs = tabsData.sort((a, b) => a.sort - b.sort);

useSeoMeta({
  title: `${i18n.t(connfig.public.SITE_NAME)} |  ${i18n.t("header.faqs")}`,
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
