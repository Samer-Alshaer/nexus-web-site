<template>
  <div>
    <section
      class="pt-[150px] pb-[318px] md:pb-[180px] overflow-hidden bg-no-repeat bg-cover bg-[url('/media/images/hero-bg.jpg')] bg-[center_bottom_3rem]"
    >
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div
              class="banner-img pxl-circle-svg relative md:right-[40px] md:rtl:right-[-40px] z-10"
            >
              <nuxt-img
                src="/media/images/hero-banner.png"
                alt="hero-banner"
                class="object-cover mr-auto md:mr-auto md:rtl:ml-auto md:rtl:mr-0 3xl:w-[700px]"
                loading="lazy"
                width="552"
                height="636"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="583"
                height="605"
                class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full mx-auto mt-[-30px] ml-[10px] md:rtl:ml-[60px] z-[-1] overflow-visible 3xl:w-[800px] 3xl:h-[800px]"
                viewBox="0 0 583 605"
              >
                <defs>
                  <linearGradient
                    id="pxl_banner_box-28ead5b-4234-grad1"
                    class="linear-dot1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color: #ff9a3e; stop-opacity: 1"
                    />
                    <stop
                      offset="100%"
                      style="stop-color: #ff5266; stop-opacity: 1"
                    />
                  </linearGradient>
                  <linearGradient
                    id="pxl_banner_box-28ead5b-4234-grad2"
                    class="linear-dot2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color: #00f0ff; stop-opacity: 1"
                    />
                    <stop
                      offset="100%"
                      style="stop-color: #004eff; stop-opacity: 1"
                    />
                  </linearGradient>
                </defs>
                <g style="fill: none">
                  <path
                    d="M14,184.994A272.662,272.662,0,0,1,86.538,74.96C132.162,33.11,221.1-17.907,297.3,11.94c28.578,11.194,42.619,28.879,65.679,54.017C409.646,116.831,454.6,150.057,501.2,201c43.357,47.4,67.034,79.645,68.733,122.975,1.5,38.358-25.27,102.87-107.945,170.117-42.679,34.716-214.147,160.718-340.157,83.027-23.3-14.366-71.984-79.632-99.988-174.055C-7.208,305.119,3.32,215.3,14,184.994Z"
                    style="
                      stroke: rgba(180, 198, 246, 0.29);
                      stroke-width: 3px;
                      filter: none;
                      fill: inherit;
                    "
                  />
                </g>
                <circle
                  fill="url(#pxl_banner_box-28ead5b-4234-grad1)"
                  class="svg-hidden linear-dot1"
                  cx="65"
                  cy="98"
                  r="11"
                />
                <circle
                  fill="url(#pxl_banner_box-28ead5b-4234-grad2)"
                  class="svg-hidden linear-dot2"
                  cx="571"
                  cy="330"
                  r="11"
                />
              </svg>
              <div
                class="flex bg-white px-6 py-5 rounded-full shadow-md min-w-[250px] xs:min-w-[350px] lg:min-w-[420px] mx-auto gap-3 flex-nowrap absolute bottom-0 left-2/4 transform -translate-x-2/4 lg:justify-between"
              >
                <div class="flex items-center">
                  <nuxt-img
                    src="/media/images/users/user3.jpg"
                    alt="user3"
                    title="user3"
                    class="w-[40px] xs:w-[55px] rounded-full border-2 border-[#ededed]"
                    loading="lazy"
                  />
                  <nuxt-img
                    src="/media/images/users/user2.jpg"
                    alt="user2"
                    title="user2"
                    class="w-[40px] xs:w-[55px] rounded-full border-2 border-[#ededed] ml-[-20px] xs:ml-[-25px] rtl:mr-[-20px] xs:rtl:mr-[-25px] rtl:ml-0"
                    loading="lazy"
                  />
                  <nuxt-img
                    src="/media/images/users/user1.jpg"
                    alt="user1"
                    title="user1"
                    class="w-[40px] xs:w-[55px] rounded-full border-2 border-[#ededed] ml-[-20px] xs:ml-[-25px] rtl:mr-[-20px] xs:rtl:mr-[-25px] rtl:ml-0"
                    loading="lazy"
                  />
                </div>
                <div class="flex flex-col">
                  <h5
                    class="text-[10px] xs:text-[15px] text-gray-800 font-bold mb-1 border-b pb-1 text-nowrap"
                  >
                    Happy Clients & Rating
                  </h5>
                  <div class="flex items-center gap-2">
                    <Icon
                      name="solar:stars-minimalistic-bold"
                      class="w-5 h-5 text-[#fdc703]"
                    />
                    <span
                      class="text-[10px] xs:text-[15px] font-bold text-gray-800 mt-1"
                      >4.8 ( 8,090 )</span
                    >
                  </div>
                </div>
                <div
                  class="hidden lg:flex items-center justify-center w-[53px] h-[53px] rounded-full bg-gradient-to-r from-gradientColorFrom to-gradientColorTo"
                >
                  <Icon
                    name="ph:check-circle-bold"
                    class="w-6 h-6 text-white"
                  ></Icon>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-[47px]">
            <h1
              class="text-white font-bold leading-tight lg:text-7xl text-5xl mb-10 font-saudi-serif"
              data-aos="zoom-out-left"
            >
              {{ $t("hero_title") }}
            </h1>
            <p class="text-white text-lg lg:text-2xl mb-10">
              Beat your competition with the finest Digital Marketing Agency in
              USA.
            </p>
            <div class="flex items-center gap-4">
              <span class="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  class="w-[60px] h-[60px] text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M9.608 1.517c.77-.175 1.57-.267 2.392-.267c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-.822 0-1.622-.092-2.392-.267a.75.75 0 1 1 .332-1.463a9.25 9.25 0 1 0 0-18.04a.75.75 0 1 1-.332-1.463M7.314 3.132a.75.75 0 0 1-.235 1.034A9.303 9.303 0 0 0 4.166 7.08a.75.75 0 0 1-1.27-.8A10.803 10.803 0 0 1 6.28 2.897a.75.75 0 0 1 1.035.235M2.98 9.94a.75.75 0 1 0-1.463-.332c-.175.77-.267 1.57-.267 2.392c0 .822.092 1.622.267 2.393a.75.75 0 0 0 1.463-.333A9.283 9.283 0 0 1 2.75 12c0-.709.08-1.398.23-2.06m.152 6.746a.75.75 0 0 1 1.034.235a9.302 9.302 0 0 0 2.913 2.913a.75.75 0 0 1-.8 1.27a10.804 10.804 0 0 1-3.382-3.383a.75.75 0 0 1 .235-1.035"
                  />
                  <path
                    fill="#fff"
                    class="animate-bounce-x"
                    d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"
                  />
                </svg>
              </span>
              <NuxtLink
                :to="localPath('/')"
                class="ne-btn btn-primary rounded-full p-3 px-5"
              >
                <span>Start a Project !</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-24 sm:pb-32 relative">
      <div class="container">
        <Swiper
          class="relative"
          :modules="[SwiperNavigation, EffectMaterial]"
          :loop="true"
          :navigation="true"
          :centeredSlides="true"
          :slidesPerView="2"
          :spaceBetween="30"
          :effect="'material'"
          :speed="1000"
          :materialEffect="{
            slideShadows: true,
            shadow: false,
            scale: 15,
            slideSplitRatio: 0.65,
          }"
        >
          <SwiperSlide
            v-for="service in services"
            :key="service.id"
            class="p-[30px] lg:p-[60px] transition ease-in-out duration-300"
            :class="{
              'hover:scale-110': hoveredServiceId === service.id,
              'blur-sm': hoveredServiceId && hoveredServiceId !== service.id,
            }"
          >
            <div class="swiper-material-wrapper">
              <div class="swiper-material-content">
                <img
                  class="demo-material-image"
                  data-swiper-material-scale="1.25"
                  src="https://material-you-slider.uiinitiative.com/images/01.jpg"
                />

                <span
                  class="demo-material-label swiper-material-animate-opacity"
                  >Slide 1</span
                >
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="custom-swiper-nav"></div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import EffectMaterial from "~/assets/js/swiper/effect-material.esm.js";
import services from "~/data/services.json";
import initAnimation from "@/utils/heroSvgAnimation";

const config = useRuntimeConfig();
const i18n = useI18n();
const { animateDots } = initAnimation();
const localPath = useLocalePath();
const hoveredServiceId = ref(null);

useSeoMeta({
  title: `${i18n.t(config.public.SITE_NAME)} |  ${i18n.t("header.home")}`,
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

useHead({
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js",
      async: true,
    },
  ],
});

onMounted(() => {
  document.querySelectorAll(".pxl-circle-svg svg").forEach((svg) => {
    const linearDot1 = svg.querySelector(".linear-dot1");
    const linearDot2 = svg.querySelector(".linear-dot2");
    const dot1Id = linearDot1 ? linearDot1.getAttribute("id") : null;
    const dot2Id = linearDot2 ? linearDot2.getAttribute("id") : null;

    if (dot1Id && dot2Id) {
      animateDots(svg, dot1Id, dot2Id);
    }
  });

  nextTick(() => {
    $(".swiper-button-prev").html(
      '<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 12 12"><path fill="currentColor" d="M10.5 6a.5.5 0 0 0-.5-.5H3.207l2.647-2.646a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L3.207 6.5H10a.5.5 0 0 0 .5-.5"/></svg>'
    );
    $(".swiper-button-next").html(
      '<svg xmlns="http://www.w3.org/2000/svg"  width="22px" height="22px" viewBox="0 0 12 12"><path fill="currentColor" d="M1.5 6a.5.5 0 0 1 .5-.5h7.293l-2.647-2.646a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L8.793 6.5H2a.5.5 0 0 1-.5-.5"/></svg>'
    );
    $(".swiper-button-prev").appendTo(".custom-swiper-nav");
    $(".swiper-button-next").appendTo(".custom-swiper-nav");
  });
});
</script>

<style>
@font-face {
  font-family: swiper-icons;
  src: url(data:application/font-woff;charset=utf-8;base64,\ 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)
    format("woff");
  font-weight: 400;
  font-style: normal;
}

:root {
  --swiper-theme-color: #007aff;
}

:host {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  display: block;
}

.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: var(
    --swiper-wrapper-transition-timing-function,
    initial
  );
  box-sizing: content-box;
}

.swiper-android .swiper-slide,
.swiper-ios .swiper-slide,
.swiper-wrapper {
  transform: translateZ(0);
}

.swiper-horizontal {
  touch-action: pan-y;
}

.swiper-vertical {
  touch-action: pan-x;
}

.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}

.swiper-slide-invisible-blank {
  visibility: hidden;
}

.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}

.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}

.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  backface-visibility: hidden;
}

.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}

.swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}

.swiper-3d {
  perspective: 1200px;
}

.swiper-3d .swiper-slide,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}

.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}

.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}

.swiper-css-mode.swiper-horizontal > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}

.swiper-css-mode.swiper-vertical > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}

.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
  scroll-snap-type: none;
}

.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: none;
}

.swiper-css-mode.swiper-centered > .swiper-wrapper:before {
  content: "";
  flex-shrink: 0;
  order: 9999;
}

.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}

.swiper-css-mode.swiper-centered.swiper-horizontal
  > .swiper-wrapper
  > .swiper-slide:first-child {
  margin-inline-start: var(--swiper-centered-offset-before);
}

.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper: before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}

.swiper-css-mode.swiper-centered.swiper-vertical
  > .swiper-wrapper
  > .swiper-slide:first-child {
  margin-block-start: var(--swiper-centered-offset-before);
}

.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper: before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}

.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}

.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}

.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}

.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}

.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}

.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  box-sizing: border-box;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}

.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
  animation: swiper-preloader-spin 1s infinite linear;
}

.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}

.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}

@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

:root {
  --swiper-material-scale: 1;
  --swiper-material-slide-size: 100%;
  --swiper-material-slide-border-radius: 32px;
}

.swiper-material-wrapper {
  border-radius: var(--swiper-material-slide-border-radius);
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  box-sizing: border-box;
  pointer-events: auto;
}

.swiper-material-content {
  position: absolute;
  transform: translateZ(0);
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-horizontal .swiper-material-content {
  height: 100%;
  width: var(--swiper-material-slide-size);
  left: calc(50% - var(--swiper-material-slide-size) / 2);
  top: 0;
}

.swiper-vertical .swiper-material-content {
  width: 100%;
  height: var(--swiper-material-slide-size);
  top: calc(50% - var(--swiper-material-slide-size) / 2);
  left: 0;
}

html,
body {
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: #000;
  line-height: 1.5;
  font-family: -apple-system, system-ui, Helvetica Neue, Helvetica, Arial,
    Segoe UI, Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  height: 100%;
  height: 100dvh;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
}

.demo-nav {
  height: 48px;
  background: #222;
  display: flex;
  justify-content: center;
  align-items: stretch;
  font-family: monospace;
  color: #fff;
  gap: 16px;
  box-sizing: border-box;
  padding: 6px 16px;
  z-index: 10;
}

.demo-nav {
  font-size: 12px;
}

.demo-nav label {
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  cursor: pointer;
}

.demo-nav label:hover {
  background: rgba(0, 0, 0, 0.1);
}

.demo-nav .dropdown {
  position: absolute;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  right: 4px;
  top: 4px;
  width: 64px;
  overflow: hidden;
}

.demo-nav .dropdown:not(.visible) {
  display: none;
}

.demo-nav .dropdown span {
  display: block;
  text-align: right;
  padding: 4px 8px;
  cursor: pointer;
}

.demo-nav .dropdown span:hover {
  background: rgba(255, 255, 255, 0.05);
}

.demo-slider {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 10;
  min-height: 0;
}

.swiper-material {
  height: 300px;
  width: calc(100% - 32px);
  max-width: 800px;
}

.demo-material-image {
  position: absolute;
  left: 0%;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: var(--swiper-material-slide-border-radius);
}

.demo-material-label {
  position: absolute;
  font-size: 24px;
  color: #fff;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  justify-content: flex-end;
  align-items: center;
  white-space: nowrap;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.2) 50%
  );
}
.swiper-material {
  height: 300px;
  width: calc(100% - 32px);
  max-width: 800px;
}

.demo-material-image {
  position: absolute;
  left: 0%;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: var(--swiper-material-slide-border-radius);
}

.demo-material-label {
  position: absolute;
  font-size: 24px;
  color: #fff;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  justify-content: flex-end;
  align-items: center;
  white-space: nowrap;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2) 50%);
}
</style>
