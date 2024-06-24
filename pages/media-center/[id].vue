<template>
  <div>
    <NuxtLayout name="page-layout" pageTitle="media_center" headVisibility>
      <div class="post group rounded-base">
        <div class="overflow-hidden relative rounded-t-base border-borderColor">
          <div
            class="lazyload-container lazyload"
            style="background-image: url(./uploads/placeholder.webp)"
          ></div>
          <img
            class="w-full max-h-[485px] h-full rounded-t-base border-borderColor object-cover lazyload"
            src="/media/images/branches.png"
            alt=""
          />
        </div>
        <div
          class="flex flex-col gap-3 border rounded-b-base border-borderColor p-4 xs:p-6"
        >
          <p class="text-xs text-medium text-themeGray">15 فبراير 2022</p>
          <p class="text-md text-medium text-colorBody">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            natus accusamus pariatur hic culpa. Voluptas, natus, itaque nostrum
            iusto odio facere ea alias, doloremque placeat debitis ab
            reprehenderit assumenda explicabo!
          </p>
        </div>
      </div>

      <div class="skeleton hidden">
        <Skeleton width="100%" class="mb-3" height="200px"></Skeleton>
        <div>
          <Skeleton width="4rem" class="mb-4"></Skeleton>
          <Skeleton height="1.2rem" class="mb-4"></Skeleton>
          <Skeleton height="1.2rem" class="hidden md:block mb-4"></Skeleton>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const i18n = useI18n();


useSeoMeta({
  title: `${i18n.t(config.public.SITE_NAME)} |  ${i18n.t(
    "header.media_center"
  )}`,
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
