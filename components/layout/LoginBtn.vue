<template>
  <div
    v-tooltip.bottom="$t('header.login_now')"
    class="[&.active]:bg-slate-500 w-10 h-10 shadow active:shadow-none rounded-base items-center justify-center cursor-pointer ransition-all flex hover:scale-95 bg-slate-100/10"
  >
    <span>
      <Icon
        name="material-symbols:person-rounded"
        class="w-[23px] h-[23px] dark:text-white text-gray-400 transition-all"
      />
    </span>
  </div>
</template>

<script setup></script>
