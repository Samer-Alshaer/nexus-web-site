<template>
  <div>
    <footer
      class="main-footer border-t dark:border-borderColor dark:bg-blend-difference bg-color3 dark:bg-color3 dark:bg-cover dark:bg-[url('/media/images/footer-bg.png')] w-full transition-all duration-300"
    >
      <div class="container p-10">
        <div class="flex items-center relative flex-col mb-10">
          <NuxtLink
            class="relative flex overflow-hidden transition-all main-logo m-0"
            :to="localPath('/')"
          >
            <logo class="w-[250px] md:w-[300px] mb-3" />
          </NuxtLink>
          <p class="text-gray-400 mb-10 text-sm md:text-[16px]">
            Exclusive agent in Saudi Arabia And GCC
          </p>
          <div
            class="flex flex-col md:flex-row justify-between items-center md:items-start gap-5 w-full md:max-w-[900px] mx-auto"
          >
            <NuxtLink
              to="#"
              class="group md:min-w-[200px] flex flex-col items-center gap-2"
            >
              <Icon
                name="mdi:account-clock"
                class="w-10 h-10 text-primary group-hover:rotate-6 dark:group-hover:text-white transition-all"
              />
              <h6 class="text-black font-bold dark:text-white">
                working hours
              </h6>
              <p class="dark:text-white text-sm">
                <span class="text-primary font-bold">Sa-Th:</span> 09:00 - 21:00
              </p>
              <p class="dark:text-white text-sm">
                <span class="text-primary font-bold">Fri: </span> 16:00 - 21:00
              </p>
            </NuxtLink>

            <NuxtLink
              to="mailto:info@dettaglioauto.sa"
              class="group md:min-w-[200px] flex flex-col items-center gap-2"
            >
              <Icon
                name="ic:round-mail"
                class="w-10 h-10 text-primary group-hover:rotate-6 dark:group-hover:text-white transition-all"
              />
              <h6 class="text-black font-bold dark:text-white">E-mail:</h6>
              <span class="text-sm dark:text-white">info@dettaglioauto.sa</span>
            </NuxtLink>

            <NuxtLink
              to="#"
              class="group md:min-w-[200px] flex flex-col items-center gap-2"
            >
              <Icon
                name="material-symbols-light:location-on"
                class="w-10 h-10 text-primary group-hover:rotate-6 dark:group-hover:text-white transition-all"
              />
              <h6 class="text-black font-bold dark:text-white">
                Company Location
              </h6>
              <p class="text-sm dark:text-white">
                King Fahd Road,Alqirawan Dist.
              </p>
              <p class="text-sm dark:text-white">Riyadh, Saudi Arabia</p>
            </NuxtLink>
          </div>
        </div>

        <nav class="site-social flex flex-wrap justify-center gap-5 mb-10">
          <!-- begin::Social-->
          <NuxtLink
            class="group dark:text-white text-primary transition-transform hover:scale-105"
            to="#!"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25"
              height="25"
              class="fill-current"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
              ></path>
            </svg>
          </NuxtLink>
          <NuxtLink
            class="group dark:text-white text-primary transition-transform hover:scale-105"
            to="#!"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"
              />
            </svg>
          </NuxtLink>
          <NuxtLink
            class="group dark:text-white text-primary transition-transform hover:scale-105"
            to="#!"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25"
              height="25"
              class="fill-current"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
              ></path>
            </svg>
          </NuxtLink>
          <NuxtLink
            class="group dark:text-white text-primary transition-transform hover:scale-105"
            to="#!"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25"
              height="25"
              class="fill-current"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"
              ></path>
            </svg>
          </NuxtLink>

          <!-- end::Social-->
        </nav>

        <div
          class="payments-way max-[430px]:py-3 px-5 rounded-full w-fit flex flex-wrap items-center justify-center mx-auto gap-2 sm:gap-4 bg-gray-100 dark:bg-white"
        >
          <NuxtImg
            src="/media/images/payments/mada-logo.svg"
            alt="mada"
            class="w-10"
            loading="lazy"
          />
          <NuxtImg
            src="/media/images/payments/visa-logo.svg"
            alt="visa"
            class="w-10"
            loading="lazy"
          />
          <NuxtImg
            src="/media/images/payments/master-logo.svg"
            alt="master"
            class="w-8"
            loading="lazy"
          />
          <NuxtImg
            src="/media/images/payments/apple-pay-logo.png"
            alt="apple-pay"
            class="w-10"
            loading="lazy"
          />
          <NuxtImg
            src="/media/images/payments/tabby-logo.png"
            alt="tabby"
            class="w-10"
            loading="lazy"
          />
          <NuxtImg
            src="/media/images/payments/tamara-logo.png"
            alt="tamara"
            class="w-10"
            loading="lazy"
          />
        </div>
      </div>
      <div class="bg-color3 py-3 text-center border-t border-borderColor">
        <p class="text-gray-400 text-sm font-medium">
          All Copy Rights Reserved to
          <NuxtLink
            to="#"
            class="text-primary dark:text-white dark:hover:text-primary transition-colors duration-500"
            >Pattern©
          </NuxtLink>
          <span v-text="new Date().getFullYear()"></span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const localPath = useLocalePath();
</script>
