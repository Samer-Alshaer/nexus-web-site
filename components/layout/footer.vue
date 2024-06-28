<template>
  <footer class="relative">
    <div class="border-t border-gray-200 dark:border-gray-800">
      <div class="container py-8 lg:py-12">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="mt-10 xl:mt-0">
            <NuxtLink
              class="relative flex overflow-hidden transition-all main-logo"
              :to="localPath('/')"
            >
              <logo class="max-h-[30px]" />
            </NuxtLink>
          </div>
          <div
            class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2"
          >
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">
                Community
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <NuxtLink
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    to="#"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Nuxters
                    <span
                      class="i-ph-arrow-up-right w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"
                    ></span
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    to="/team"
                    >Team
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    to="/design-kit"
                    >Design Kit
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">
                Products
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <NuxtLink
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    to="#"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Nexus
                    <span
                      class="i-ph-arrow-up-right w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"
                    ></span
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    to="#"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Nexus Studio
                    <span
                      class="i-ph-arrow-up-right w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"
                    ></span
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    to="#"
                    rel="noopener noreferrer"
                    target="_blank"
                    >NxeusHub
                    <span
                      class="i-ph-arrow-up-right w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"
                    ></span
                  ></NuxtLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">
                Enterprise
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <NuxtLink
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    to="#"
                    >Support
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    to="#"
                    >Agencies
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    to="#"
                    >Sponsors
                  </NuxtLink>
                </li>
              </ul>
            </div>
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
            © 2022-<span v-text="new Date().getFullYear()"></span> Nexus
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
