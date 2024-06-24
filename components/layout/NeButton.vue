<template>
  <button :class="'ne-btn group' + props.class" type="button">
    <span v-if="!loading"><slot></slot></span>
    <Icon
      v-if="loading"
      name="svg-spinners:eclipse-half"
      class="w-5 h-5 dark:text-white text-black"
    />
  </button>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  class: {
    type: String,
    default: "btn-primary",
  },
});
</script>
