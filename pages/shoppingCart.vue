<template>
  <div>
    <MainLayout>
      <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
        <div v-if="false" class="h-[500] flex items-center justify-center">
          <div class="pt-20">
            <img
              src="/cart-empty.png"
              alt="cart-empty"
              class="mx-auto"
              width="250"
            />
            <div class="text-xl text-center mt-4">No items yet?</div>
            <div v-if="true" class="text-center mt-4 flex">
              <NuxtLink
                to="/auth"
                class="bg-[#fd374f] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
              >
                Sign in
              </NuxtLink>
            </div>
          </div>
        </div>
        <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
          <div class="md:w-[65%]">
            <div class="bg-red-100 rounded-lg p-4">
              <div class="text-2xl font-bold mb-2">Shopping Cart (0)</div>
            </div>
            <div class="bg-[#dfdfdf] rounded-lg p-4 mt-4">
              <div class="text-red-500 font-bold">
                Welcome Deal applicable on 1 item only
              </div>
            </div>
            <div id="Items" class="bg-red-100 rounded-lg mt-4">
              <div
                v-for="(product, index) in products"
                :key="index + Math.random()"
              >
                <CartItem
                  :product="product"
                  :selectedArray="selectedArray"
                  @selectedRadio="selectedRadioFunc"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

const products = [
  {
    id: 1,
    title: "Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu id neque condimentum faucibus.",
    url: "https://picsum.photos/id/7/800/800",
    price: 9999.99,
  },
  {
    id: 2,
    title: "Product 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu id neque condimentum faucibus.",
    url: "https://picsum.photos/id/8/800/800",
    price: 9999.99,
  },
];

const selectedRadioFunc = () => {};
</script>

<style lang="scss" scoped></style>
