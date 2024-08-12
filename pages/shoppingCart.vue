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

          <div class="md:hidden block my-4" />
          <div class="md:w-[35%]">
            <div id="Summary" class="rounded-lg p-4 bg-red-100 -mt-0"></div>
            <div class="text-2xl font-extrabold mb-2">Summary</div>
            <div
              class="flex items-center justify-between my-4 bg-red-100 p-1 rounded-lg"
            >
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
              </div>
            </div>

            <button
              type="button"
              @click="gotToCheckout"
              class="flex justify-center w-full bg-[#fd374f] text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >
              Checkout
            </button>
            <div id="PaymentProtection" class="bg-red-100 rounded-lg p-4 mt-4">
              <div class="text-lg font-semibold mb-2">Payment methods</div>
              <div class="flex items-center justify-start gap-8 my-4">
                <div
                  v-for="(card, index) in cards"
                  :key="index + Math.random()"
                >
                  <img :src="card" alt="card" class="h-6" />
                </div>
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
import { useUserStore } from "~/stores/store.js";
const userStore = useUserStore();

let selectedArray = ref([]);

onMounted(() => {
  setTimeout(() => {
    userStore.isLoading = true;
  }, 200);
});

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

const cards = ["/mastercard.png", "/visa.png", "/paypal.png", "/applepay.png"];

const totalPriceComputed = computed(() => {
  let price = 0;
  userStore.cart.forEach((prod) => {
    price += prod.price;
  });
  return price;
});

const selectedRadioFunc = (e) => {
  if (!selectedArray.value.length) {
    selectedArray.value.push(e);
    return;
  }
  selectedArray.value.forEach((item, index) => {
    if (e.id != item.id) {
      selectedArray.value.push(e);
    } else {
      selectedArray.value.splice(index, 1);
    }
  });
};

const gotToCheckout = ()=>{
  let ids = []
  userStore.checkout = [];
  selectedArray.value.forEach((item) => {
    ids.push(item.id);
  });
  let res = userStore.cart.filter((item)=> {
    return ids.indexOf(item.id) != -1;
  });

  res.forEach(item => userStore.checkout.push(toRaw(item)))
  return navigateTo('/checkout')
}

</script>

<style lang="scss" scoped></style>
