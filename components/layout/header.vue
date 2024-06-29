<template>
  <div>
    <header
      class="main-header z-50 w-full top-0 left-0 transition-all ease-linear duration-300 delay-75"
      :class="[
        {
          'top-0': isWindowScrolled || props.promoPosition == 'bottom',
          'top-[var(--promo-h)]':
            !isWindowScrolled && props.promoPosition !== 'bottom',
          'dark:bg-color1 absolute': !isWindowScrolled,
          relative: !isHome,
        },
        props.class,
      ]"
    >
      <div class="container">
        <div
          class="h-[var(--header-h)] flex items-center relative"
          :class="{
            'h-[60px] md:h-[90px]': isWindowScrolled,
            'md:h-[90px]': isHome,
          }"
        >
          <NuxtLink
            class="relative flex overflow-hidden transition-all main-logo"
            :to="localPath('/')"
          >
            <logo class="h-[55px]" />
          </NuxtLink>

          <nav class="hidden lg:block mx-auto">
            <ul
              class="menu flex gap-8 xl:gap-12"
              :class="
                props.fixedHeader
                  ? '*:text-black dark:*:text-white'
                  : 'text-white'
              "
            >
              <li class="group relative">
                <NuxtLink
                  class="text-lg transition-colors font-semibold relative peer"
                  :to="localPath('/')"
                >
                  {{ $t("header.home") }}
                </NuxtLink>
                <div
                  class="ne-nav-divider peer-[.router-link-active]:scale-x-100"
                ></div>
              </li>
              <li class="group relative">
                <NuxtLink
                  class="group text-lg font-semibold transition-color"
                  :to="localPath('/services')"
                  >{{ $t("header.services") }}
                </NuxtLink>
                <div class="ne-nav-divider"></div>
              </li>
              <li class="group relative">
                <NuxtLink
                  class="text-lg font-semibold transition-colors"
                  :to="localPath('/about-us')"
                  >{{ $t("header.company") }}
                  <!-- <Icon
                    name="material-symbols-light:keyboard-arrow-down"
                    class="w-6 h-6 ltr:ml-[-5px] rtl:mr-[-5px] group-hover:rotate-180 transition-all"
                  /> -->
                </NuxtLink>
                <!-- <SubMenu
                  names="header.photo_gallery|header.video_gallery"
                  links="photo-gallery|video-gallery"
                /> -->
                <div class="ne-nav-divider"></div>
              </li>
              <li class="group relative">
                <NuxtLink
                  class="text-lg font-semibold transition-colors"
                  :to="localPath('/careers')"
                >
                  {{ $t("header.careers") }}
                </NuxtLink>
                <div class="ne-nav-divider"></div>
              </li>
              <li class="group relative">
                <NuxtLink
                  class="text-lg font-semibold transition-colors"
                  :to="localPath('/contact')"
                  >{{ $t("header.contact") }}
                </NuxtLink>
                <div class="ne-nav-divider"></div>
              </li>
            </ul>
          </nav>

          <div class="mx-auto lg:mx-0"></div>

          <div
            class="flex items-center justify-center lg:justify-end gap-x-1.5 group"
          >
            <ThemeToggler />
            <LangSwitcher />
            <LoginBtn />
            <div
              @click="siteOptions.mobileSidebarOpen = true"
              class="flex lg:hidden w-10 h-10 shadow active:shadow-none rounded-base items-center justify-center cursor-pointer ransition-all hover:scale-95 hover:bg-slate-100/50 dark:hover:bg-slate-100/10"
            >
              <span>
                <Icon
                  name="material-symbols:menu"
                  class="w-[23px] h-[23px] text-gray-400 transition-all"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- <SidebarMenu /> -->
  </div>
</template>

<script setup type="ts">
const scrollVal = ref(null);
const isWindowScrolled = ref(false);
const localPath = useLocalePath();
const siteOptions = useSiteOptions();
const router = useRouter()

const handleScroll = () => {
  isWindowScrolled.value = true;
  if (window.scrollY > 100) {
    scrollVal.value = window.scrollY;
  } else {
    scrollVal.value = window.scrollY;
  }
};

const isHome = computed(() => {
  return router.currentRoute.value.path === '/' || router.currentRoute.value.path === '/ar';
});

const props = defineProps({
  promoPosition: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    default: "",
  },
  fixedHeader: {
    type: Boolean,
    default: false,
  }
})

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
