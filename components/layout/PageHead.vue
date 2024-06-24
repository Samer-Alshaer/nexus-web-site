<template>
  <div class="header mb-8" v-if="props.visible">
    <div class="flex items-center gap-1">
      <Icon
        name="material-symbols:floor-rounded"
        class="w-[20px] h-[20px] text-primary transition-all duration-1000 rtl:rotate-90"
      />
      <h1 class="font-bold text-2xl text-black dark:text-white">
        {{ props.title }}
      </h1>
    </div>
  </div>
</template>

<script setup type="ts">

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    default: true
  }
})
</script>
