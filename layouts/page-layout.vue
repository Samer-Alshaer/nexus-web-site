<template>
  <div class="container">
    <PageHead :title="$t(pageTitle)" :visible="props.headVisibility" />
    <div
      class="content bg-white dark:bg-color3 rounded-base p-8 mx-auto border dark:border-borderColor"
    >
      <slot />
    </div>
  </div>
</template>

<script setup type="ts">
const props = defineProps({
  headVisibility: {
    type: Boolean,
    default: false
  },
  pageTitle: {
    type: String,
    default: ''
  }
})
</script>
