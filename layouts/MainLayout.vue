<template>
  <div>
    <div id="MainLayout" class="w-full fixed z-50">
      <div
        id="TopMenu"
        class="w-full bg-[#fafafa] border-b md:block hidden text-center"
      >
        <ul
          class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 m-auto bg-[#fafafafa] max-w-[1200px]"
        >
          <li
            class="border-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer transition-all"
          >
            Sell onAliExpress
          </li>
          <li
            class="border-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer transition-all"
          >
            Cookie Preferences
          </li>
          <li
            class="border-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer transition-all"
          >
            Help
          </li>
          <li
            class="border-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer transition-all"
          >
            Buyer Protection
          </li>
          <li
            class="border-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer transition-all"
          >
            <Icon name="ic:sharp-install-mobile" size="17" />
            App
          </li>
          <li
            @mouseenter="isAccountMenu = true"
            @mouseleave="isAccountMenu = false"
            class="relative flex items-center px-2.5 hover:text-[#ff4646] h-full cursor-pointer"
            :class="
              isAccountMenu
                ? 'bg-white border z-40 shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]'
                : ''
            "
          >
            <Icon name="ic:outline-person" size="17" />
            Account
            <Icon name="mdi:chevron-down" size="15" class="ml-5" />
            <div
              id="AccountMenu"
              v-if="isAccountMenu"
              class="absolute top-[38px] z-40 -left-[100px] border-x border-b bg-white W-[229px]"
            >
              <div v-if="true">
                <div class="text-semiblod text-[15px] my-4 px-3">
                  Welcome To AlieExpress!
                </div>
                <div
                  class="flex items-center gap-1 px-3 mb-3 text-[15px] text-semibold hover:border-r border-r-red-200 transition"
                >
                  <NuxtLink
                    to="/auth"
                    class="bg-[#ff4646] text-center w-full text-[16px] rounded-sm text-white font-semibold p-2"
                  >
                    Login / Register
                  </NuxtLink>
                </div>
              </div>
              <div class="border-b" />
              <ul class="bg-white">
                <li
                  @click="NavigateTeast('/orders')"
                  class="text-13px py-2 px-4 w-full hover:bg-gray-200"
                >
                  My orders
                </li>
                <li
                  @click="NavigateTeast('/about')"
                  class="text-13px py-2 px-4 w-full hover:bg-gray-200"
                >
                  Sign out
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div id="MainHeader" class="flex items-center w-full bg-white py-8">
        <div
          class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 mx-auto"
        >
          <NuxtLink to="/" class="min-w-[170px]">
            <img
              src="/public/AliExpress-logo.png"
              alt="AliExpress-logo"
              width="170px"
          /></NuxtLink>
          <div class="max-w-[700px] w-full md:block hidden">
            <div class="relative">
              <div
                class="flex- items-center border-2 border-[#ff4646] rounded-md p-1"
              >
                <input
                  type="text"
                  class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
                  placeholder="kitchen accessories"
                  v-model="searchItem"
                />
                <Icon
                  v-if="isSearching"
                  name="eos-icons:loading"
                  size="25"
                  class="mr-2 absolute right-1"
                />
                <button
                  class="flex items-center h-[100%] p-1.5 px-2 bg-[#ff4646] rounded-md absolute right-[-31px] top-0"
                >
                  <Icon name="ph:magnifying-glass" size="20" color="#FFF" />
                </button>
              </div>
              <div class="absolute bg-white max-w-[700px] h-auto w-full">
                <div class="p-1" v-if="false">
                  <NuxtLink
                    to="`/item/1`"
                    class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
                  >
                    <div class="flex items-center">
                      <img
                        src="https://picsum.photos/id/82/300/300"
                        width="40"
                        class="rounded-md"
                        alt=""
                      />
                      <div class="truncate ... ml-2">testing</div>
                    </div>
                    <div class="truncate">$98.99</div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <NuxtLink to="/shoppingcart" class="flex items-center">
            <button
              class="relative md:block hidden"
              @mouseenter="isCartHover = true"
              @mouseleave="isCartHover = false"
            >
              <span
                class="absolute flex items-center justify-center -right-[3px] z-40 top-0 bg-[#FF4646] h-[17px] min-w-[17px] text-xs text-white px-0.5 rounded-full"
              >
                0
              </span>
              <div>
                <Icon
                  name="ph:shopping-cart-simple-light"
                  size="33"
                  :color="isCartHover ? '#ff4646' : ''"
                />
              </div>
            </button>
          </NuxtLink>
          <button
            @click="userStore.isMenuOverlay = true"
            class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200"
          >
            <Icon name="radix-icons:hamburger-menu" size="33" />
          </button>
        </div>
      </div>
    </div>
    <Loading v-if="userStore?.isLoading && false" />
    <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" />
    <slot />
    <Footer v-if="!userStore?.isLoading" />
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/store.js";
const userStore = useUserStore();

let isAccountMenu = ref(false);
let isCartHover = ref(false);
let isSearching = ref(true);
let searchItem = ref("");

// function
const NavigateTeast = function (path) {
  navigateTo(path, {
    open: {
      target: "_blank",
      windowFeatures: {
        width: 500,
        height: 500,
      },
    },
  });
};
</script>

<style lang="scss" scoped></style>
