<template>
  <div
    role="button"
    v-tooltip.bottom="$t('header.login_now')"
    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
  >
    <span>
      <Icon name="solar:user-bold" class="w-5 h-5 text-white transition-all" />
    </span>
  </div>
</template>

<script setup></script>
