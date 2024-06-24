<template>
  <ul
    class="group absolute top-full w-52 p-3 mt-6 
    rounded-lg bg-white dark:bg-color3 opacity-0 
    invisible transition-all before:w-full before:h-6
    before:absolute before:bottom-full before:right-0
    before:left-0 space-y-1 shadow-[0px_0px_16px_8px] shadow-[#dddddd47] dark:shadow-none"
    :class="{
      'ltr:left-0 rtl:right-0 ': props.position == 'auto',
      'left-1/2 -translate-x-1/2': props.position == 'center',
      'group-hover:visible group-hover:opacity-[1] scale-50 group-hover:scale-100': props.parent == 'group',
      'peer-hover:visible peer-hover:opacity-[1] hover:visible hover:translate-y-0 hover:opacity-[1] translate-y-10 peer-hover:translate-y-0  duration-500': props.parent == 'peer'
    }"
  >
    <li v-for="(item, index) in data" :key="index">
      <NuxtLink
        :to="localPath(`/${item.to}`)"
        class="block text-sm font-bold text-black rounded-md hover:text-white hover:bg-primary [&.router-link-active]:text-white [&.router-link-active]:bg-primary transition-colors px-4 py-2"
      >
        <span>{{ $t(item.name) }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const localPath = useLocalePath();

const props = defineProps({
  links: {
    type: String,
    required: true,
  },
  names: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    default: "auto",
  },
  parent: {
    type: String,
    default: "group",
  }
});

const links = props.links.split("|");
const names = props.names.split("|");

const data = names.map((name, index) => ({
  name,
  to: links[index],
}));
</script>
