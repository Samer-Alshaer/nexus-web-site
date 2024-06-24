<template>
  <div>
    <NuxtLayout name="page-layout" pageTitle="media_center" headVisibility>
      <div
        class="posts grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        v-if="!pending"
      >
        <div class="post group rounded-base" v-for="i in count" :key="i.id">
          <div
            class="overflow-hidden relative rounded-t-base border-borderColor"
          >
            <div
              class="lazyload-container lazyload"
              style="background-image: url(./uploads/placeholder.webp)"
            ></div>
            <!-- <img
              class="w-full max-h-[200px] h-full rounded-t-base border-borderColor object-cover transition-transform duration-500 group-hover:scale-110 lazyload"
              src="/media/images/branches.png"
              alt=""
            /> -->
          </div>
          <div
            class="flex flex-col gap-3 border rounded-b-base border-borderColor p-4 xs:p-6"
          >
            <p class="text-xs text-medium text-themeGray">15 فبراير 2022</p>
            <h3
              class="text-xs font-bold text-colorBody leading-5 line-clamp-2 hover:!text-primary"
            >
              <NuxtLink class="post-link text-current transition-colors" to="#!"
                >استقبل المعهد وفد من شركة تكوين المتطورة للصناعات</NuxtLink
              >
            </h3>
          </div>
        </div>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" v-if="pending">
        <div v-for="i in 8">
          <Skeleton width="100%" class="mb-3" height="200px"></Skeleton>
          <div>
            <Skeleton width="4rem" class="mb-4"></Skeleton>
            <Skeleton height="1.2rem" class="mb-4"></Skeleton>
            <Skeleton height="1.2rem" class="hidden md:block mb-4"></Skeleton>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const config = useRuntimeConfig().public;
const i18n = useI18n();

const {
  data: count,
  pending,
  error,
  refresh,
} = await useFetch(`${config.API_URL}/albums/1/photos`, {
  lazy: true,
  server: false,
  onResponse({ request, response, options }) {
    console.log(request);
  },
});

useSeoMeta({
  title: `${i18n.t(config.SITE_NAME)} |  ${i18n.t("header.media_center")}`,
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
