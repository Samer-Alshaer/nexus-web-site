<template>
  <div>
    <nuxt-img
      class="block rtl:hidden"
      loading="lazy"
      alt="logo"
      :class="{ 'blur-sm': blurOn, [props.class]: props.class }"
      @load="blurOn = false"
      src="/media/images/logos/logo-en.svg"
    />
    <nuxt-img
      class="hidden rtl:block"
      loading="lazy"
      alt="logo"
      :class="{ 'blur-sm': blurOn, [props.class]: props.class }"
      @load="blurOn = false"
      src="/media/images/logos/logo-ar.svg"
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

onMounted(() => {
  blurOn.value = false;
});
</script>
