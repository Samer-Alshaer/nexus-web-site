<template>
  <div class="flex flex-col min-h-screen" id="root">
    <!-- <promo
      class="h-[var(--promo-h)] transition-all"
      :class="[
        {
          '-translate-y-[var(--promo-h)]':
            isWindowScrolled && promoPosition !== 'bottom',
        },
        `${promoPosition}-0`,
      ]"
    /> -->
    <Header :promoPosition="promoPosition" />
    <main
      class="flex-1 bg-white"
     
    >
      <slot />
    </main>
    <preloader v-if="loading" />
    <WhatsappIcon />
    <SidebarMenu />
    <!-- <Footer /> -->
  </div>
</template>

<script setup type="ts">

const nuxtApp = useNuxtApp();
const loading = ref(true);
const promoPosition = ref('top');
const isWindowScrolled = ref(false);

const handleScroll = () => {
  if (window.scrollY > 0) {
    isWindowScrolled.value = true;
  } else {
    isWindowScrolled.value = false;
  }
};

nuxtApp.hook("page:finish", () => {
  loading.value = false;
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
