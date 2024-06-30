<template>
  <div>
    <NuxtImg
      class="hidden dark:ltr:block"
      loading="lazy"
      alt="logo"
      :class="{
        'blur-sm': blurOn,
        [props.class]: props.class,
        'ltr:!block': isHome && !isWindowScrolled,
      }"
      @load="blurOn = false"
      src="/media/images/logos/logo-en.svg"
    />
    <NuxtImg
      class="hidden dark:rtl:block"
      loading="lazy"
      alt="logo"
      :class="{
        'blur-sm': blurOn,
        [props.class]: props.class,
        'rtl:!block': isHome && !isWindowScrolled,
      }"
      @load="blurOn = false"
      src="/media/images/logos/logo-ar.svg"
    />
    <NuxtImg
      class="block rtl:hidden dark:hidden"
      loading="lazy"
      alt="logo"
      :class="{
        'blur-sm': blurOn,
        [props.class]: props.class,
        hidden: isHome && !isWindowScrolled,
      }"
      @load="blurOn = false"
      src="/media/images/logos/logo-en-light.svg"
    />
    <NuxtImg
      class="block dark:rtl:hidden ltr:hidden"
      loading="lazy"
      alt="logo"
      :class="{
        'blur-sm': blurOn,
        [props.class]: props.class,
        hidden: isHome && !isWindowScrolled,
      }"
      @load="blurOn = false"
      src="/media/images/logos/logo-ar-light.svg"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  class: {
    type: String,
    required: false,
  },
});

const blurOn = ref(true);
const router = useRouter();
const isWindowScrolled = ref(false);

const isHome = computed(() => {
  return (
    router.currentRoute.value.path === "/" ||
    router.currentRoute.value.path === "/ar"
  );
});

const handleScroll = () => {
  if (window.scrollY > 0) {
    isWindowScrolled.value = true;
  } else {
    isWindowScrolled.value = false;
  }
};

onMounted(() => {
  blurOn.value = false;
  window.addEventListener("scroll", handleScroll);
});
</script>
