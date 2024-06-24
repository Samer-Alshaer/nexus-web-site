<template>
  <div>
    <header
      class="main-header z-50 absolute w-full top-0 left-0 transition-all duration-300"
      :class="{
        'top-0': isWindowScrolled || props.promoPosition == 'bottom',
        'top-[var(--promo-h)]':
          !isWindowScrolled && props.promoPosition !== 'bottom',
        'dark:bg-[var(--header-bg)]': isWindowScrolled,
        'dark:bg-color1': !isWindowScrolled,
      }"
    >
      <div class="container">
        <div class="h-[var(--header-h)] flex items-center relative">
          <NuxtLink
            class="relative flex overflow-hidden transition-all main-logo"
            :to="localPath('/')"
          >
            <logo class="max-h-[30px]" />
          </NuxtLink>

          <nav class="hidden lg:block mx-auto">
            <ul class="menu flex gap-8 xl:gap-12">
              <li class="group relative">
                <NuxtLink
                class="text-lg transition-colors text-white font-semibold relative peer"
                :to="localPath('/')"
              >
                {{ $t("header.home") }}
              </NuxtLink>
              <div class="ne-nav-divider peer-[.router-link-active]:scale-x-100"></div>              
              </li>
              <li class="group relative">
                <NuxtLink
                  class="group text-lg font-semibold group-has-[.router-link-active]:text-primary transition-colors text-white"
                  :to="localPath('/services')"
                  >{{ $t("header.services") }}
                </NuxtLink>
                <div class="ne-nav-divider"></div>
              </li>
              <li class="group relative">
                <NuxtLink
                  class="text-lg font-semibold transition-colors text-white"
                  to="/courses.html"
                  >{{ $t("header.company") }}
                  <!-- <Icon
                    name="material-symbols-light:keyboard-arrow-down"
                    class="w-6 h-6 ltr:ml-[-5px] rtl:mr-[-5px] text-white group-hover:rotate-180 transition-all"
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
                  class="text-lg font-semibold transition-colors text-white"
                  to="/careers"
                >
                  {{ $t("header.careers") }}
                </NuxtLink>
                <div class="ne-nav-divider"></div>
              </li>
              <li class="group relative">
                <NuxtLink
                  class="text-lg font-semibold transition-colors text-white"
                  to="/trainee-services.html"
                  >{{ $t("header.contact") }}</NuxtLink
                >
                <div class="ne-nav-divider"></div>
              </li>
            </ul>
          </nav>

          <div class="mx-auto lg:mx-0"></div>
          <div class="flex items-center gap-[8px]">
            <ThemeToggler />
            <LangSwitcher class="w-10 h-10 hidden sm:flex" />
            <LoginBtn />
            <div
              @click="siteOptions.mobileSidebarOpen = true"
              class="flex lg:hidden w-10 h-10 shadow active:shadow-none rounded-base items-center justify-center cursor-pointer ransition-all hover:scale-95 hover:bg-slate-100/50 dark:hover:bg-slate-100/10 "
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
const isWindowScrolled = ref(false);
const localPath = useLocalePath();
const siteOptions = useSiteOptions();
const value = ref(null);

const handleScroll = () => {
  if (window.scrollY > 0) {
    isWindowScrolled.value = true;
  } else {
    isWindowScrolled.value = false;
  }
};

const props = defineProps({
  promoPosition: {
    type: String,
    required: true,
  },
})

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
