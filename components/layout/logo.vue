<template>
  <div>
    <nuxt-img
      class="block"
      loading="lazy"
      alt="logo"
      :class="{ 'blur-sm': blurOn, [props.class]: props.class }"
      @load="blurOn = false"
      src="/media/images/logos/logo.svg"
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
