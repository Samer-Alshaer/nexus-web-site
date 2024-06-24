<template>
  <div class="card flex justify-content-center">
    <Sidebar v-model:visible="siteOptions.mobileSidebarOpen">
      <template #header>
        <div class="flex align-items-center gap-2">
          <logo class="max-w-[180px]" />
        </div>
      </template>
      <div class="flex flex-col h-full">
        <div class="overflow-y-auto">
          <ul class="list-none m-0">
            <li>
              <NuxtLink
                @click="closeSidebar"
                :to="localPath('/')"
                :class="linkCss"
              >
                {{ $t("header.home") }}
              </NuxtLink>
            </li>
            <li class="group">
              <div
                v-styleclass="{
                  selector: '@next',
                  enterClass: 'hidden',
                  enterActiveClass: 'slidedown',
                  leaveToClass: 'hidden',
                  leaveActiveClass: 'slideup',
                }"
                class="grou flex cursor-pointer justify-between items-center p-3 transition-all font-normal rounded-base hover:bg-gray-100 dark:hover:bg-slate-100/10 hover:text-primary dark:hover:text-white group-has-[.router-link-active]:text-primary"
              >
                {{ $t("header.about") }}
                <Icon
                  name="material-symbols-light:keyboard-arrow-down"
                  class="group-has-[.hidden]:rotate-0 rotate-180 w-6 h-6 transition-all group-hover:text-primary dark:group-hover:text-white group-has-[.router-link-active]:text-primary"
                />
              </div>
              <ul class="list-none hidden p-0 mt-1 overflow-hidden">
                <li>
                  <NuxtLink
                    @click="closeSidebar"
                    :to="localPath('/about')"
                    :class="linkCss"
                  >
                    <Icon
                      name="tabler:minus"
                      class="w-[10px] h-[10px] text-primary transition-all group-[&.router-link-active]:text-white"
                    />
                    {{ $t("header.about") }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mt-auto p-3">
          <LangSwitcher class="w-full h-12 flex" />
        </div>
      </div>
    </Sidebar>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const localPath = useLocalePath();
const siteOptions = useSiteOptions();

const linkCss =
  "group flex items-center gap-1 p-3 mb-1 transition-all font-normal rounded-base hover:bg-gray-100 dark:hover:bg-slate-100/10 dark:hover:text-white [&.router-link-active]:bg-primary [&.router-link-active]:text-white [&.router-link-active]:hover:bg-primary";

const closeSidebar = () => {
  siteOptions.mobileSidebarOpen = false;
};
</script>
