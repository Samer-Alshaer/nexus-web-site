<template>
  <div
    class="preloader fixed inset-0 z-[9999] flex justify-center items-center bg-black bg-opacity-90"
  >
    <Icon name="tabler:loader-3" class="text-6xl text-white animate-spin" />
  </div>
</template>

<script>
export default {
  name: "Preloader",
};
</script>
