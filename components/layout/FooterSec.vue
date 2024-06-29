<template>
  <footer class="relative">
    <div class="border-t border-gray-200 dark:border-gray-800">
      <div class="container py-8">
        <div
          class="flex items-center justify-between flex-col gap-5 md:flex-row"
        >
          <div>
            <NuxtLink
              class="relative flex overflow-hidden transition-all main-logo"
              :to="localPath('/')"
            >
              <logo class="h-[210px]" />
            </NuxtLink>
          </div>
          <div
            class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2"
          >
            <ul role="list" class="flex items-center flex-wrap">
              <li>
                <NuxtLink
                  class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  :to="localPath('/')"
                  >{{ $t("header.home") }}
                </NuxtLink>
                <Icon
                  name="ci:dot-04-l"
                  class="w-2 h-2 text-gray-400 dark:text-gray-500 mx-2"
                ></Icon>
              </li>
              <li>
                <NuxtLink
                  class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  :to="localPath('/services')"
                  >{{ $t("header.services") }}
                </NuxtLink>
                <Icon
                  name="ci:dot-04-l"
                  class="w-2 h-2 text-gray-400 dark:text-gray-500 mx-2"
                ></Icon>
              </li>
              <li>
                <NuxtLink
                  class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  :to="localPath('/about')"
                  >{{ $t("header.company") }}
                </NuxtLink>
                <Icon
                  name="ci:dot-04-l"
                  class="w-2 h-2 text-gray-400 dark:text-gray-500 mx-2"
                ></Icon>
              </li>
              <li>
                <NuxtLink
                  class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  :to="localPath('/careers')"
                >
                  {{ $t("header.careers") }}
                </NuxtLink>
                <Icon
                  name="ci:dot-04-l"
                  class="w-2 h-2 text-gray-400 dark:text-gray-500 mx-2"
                ></Icon>
              </li>
              <li>
                <NuxtLink
                  class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  :to="localPath('/contact')"
                  >{{ $t("header.contact") }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-200 dark:border-gray-800">
      <div
        class="container py-6 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3"
      >
        <div
          class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"
        >
          <NuxtLink
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            aria-label="Nexus on X"
            to="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon
              name="fa6-brands:x-twitter"
              class="w-5 h-5"
              aria-hidden="true"
            /> </NuxtLink
          ><NuxtLink
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            aria-label="Nexus on facebook"
            to="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon
              name="akar-icons:facebook-fill"
              class="w-5 h-5"
              aria-hidden="true"
            /> </NuxtLink
          ><NuxtLink
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            aria-label="Nexus on Linkedin"
            to="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon
              name="akar-icons:linkedin-box-fill"
              class="w-5 h-5"
              aria-hidden="true"
            /> </NuxtLink
          ><NuxtLink
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            aria-label="Nexus on GitHub"
            to="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon
              name="akar-icons:github-fill"
              class="w-5 h-5"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
        <div
          class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"
        ></div>
        <div
          class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1"
        >
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            © <span v-text="new Date().getFullYear()"></span> Nexus
            Technology. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const localPath = useLocalePath();
</script>
