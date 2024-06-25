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
                class="flex bg-white px-6 py-5 rounded-full shadow-md min-w-[350px] lg:min-w-[420px] invisible xs:visible mx-auto gap-3 flex-nowrap absolute bottom-0 left-2/4 transform -translate-x-2/4 lg:justify-between"
              >
                <div class="flex items-center">
                  <nuxt-img
                    src="/media/images/users/user3.jpg"
                    alt="user3"
                    title="user3"
                    class="w-[55px] rounded-full border-2 border-[#ededed]"
                    loading="lazy"
                  />
                  <nuxt-img
                    src="/media/images/users/user2.jpg"
                    alt="user2"
                    title="user2"
                    class="w-[55px] rounded-full border-2 border-[#ededed] ml-[-25px] rtl:mr-[-25px] rtl:ml-0"
                    loading="lazy"
                  />
                  <nuxt-img
                    src="/media/images/users/user1.jpg"
                    alt="user1"
                    title="user1"
                    class="w-[55px] rounded-full border-2 border-[#ededed] ml-[-25px] rtl:mr-[-25px] rtl:ml-0"
                    loading="lazy"
                  />
                </div>
                <div class="flex flex-col">
                  <h5
                    class="text-[15px] text-gray-800 font-bold mb-1 border-b pb-1"
                  >
                    Happy Clients & Rating
                  </h5>
                  <div class="flex items-center gap-2">
                    <Icon
                      name="solar:stars-minimalistic-bold"
                      class="w-5 h-5 text-[#fdc703]"
                    />
                    <span class="text-[15px] font-bold text-gray-800 mt-1"
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
              class="text-white font-bold leading-tight lg:text-7xl text-5xl mb-10"
              data-aos="zoom-out-left"
            >
              Innovate Your Digital Presence
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
    <section class="pt-10">
      <div class="container">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta maiores
        perspiciatis nesciunt excepturi sed sequi, magni error obcaecati sunt
        vero odit, distinctio ratione iusto autem debitis, repellendus assumenda
        nobis. Debitis?
      </div>
    </section>
  </div>
</template>

<script setup>
import initAnimation from "@/utils/heroSvgAnimation";

const config = useRuntimeConfig();
const i18n = useI18n();
const { animateDots } = initAnimation();
const localPath = useLocalePath();

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
});
</script>
