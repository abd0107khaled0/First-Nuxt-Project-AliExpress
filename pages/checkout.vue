<template>
  <div>
    <MainLayout>
      <div class="mt-4 max-w-[1200px] mx-auto px-2">
        <div class="gap-4 md:flex justify-between flex-col mx-auto w-full">
          <div class="md:w-[65%]">
            <div class="bg-red-100 rounded-lg p-4">
              <div class="text-xl font-semibold mb-2">Shipping Address</div>
            </div>
            <div v-if="true" class="bg-red-100 rounded-lg mt-2 p-2">
              <NuxtLink
                to="/address"
                class="flex items-center text-blue-500 hover:text-red-100"
              >
                <Icon name="mdi:plus" size="18" class="mr-2" />
                Update Address
              </NuxtLink>
              <div class="pt-2 border-t">
                <div class="underline pb-1">Delivery Address</div>
                <ul class="text-xs">
                  <li class="flex items-center gap-2">
                    <div>Contact name:</div>
                    <div class="font-bold">Test</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Address:</div>
                    <div class="font-bold">Test</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Zip Code:</div>
                    <div class="font-bold">Test</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>City:</div>
                    <div class="font-bold">Test</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Country:</div>
                    <div class="font-bold">Test</div>
                  </li>
                </ul>
              </div>
            </div>
            <NuxtLink
              to="/address"
              class="flex items-center text-blue-500 hover:text-red-500"
              v-else
            >
              <Icon name="mdi:plus" size="18" class="mr-2" />
              Add New Address
            </NuxtLink>
          </div>
          <div id="Items" class="bg-red-100 rounded-lg p-4 mt-4">
            <div
              v-for="(product, index) in products"
              :key="index + Math.random()"
            >
              <CheckoutItem :product="product" />
            </div>
          </div>
        </div>

        <div class="block my-4 md:hidden" />

        <div class="md:w-[35%]">
          <div id="PlaceOrder" class="bg-white rounded-lg p-4">
            <div class="text-2xl font-extrabold justify-between my-4">
              Summary
            </div>

            <div class="flex items-center justify-between my-4">
              <div>Total Shipping</div>
              <div>Free</div>
            </div>

            <div class="border-t" />

            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $ <span class="font-extrabold">{{ total / 100 }}</span>
              </div>
            </div>

            <form @submit.prevent="pay()">
              <div
                class="border border-gray-500 p-2 rounded-sm"
                id="card-element"
              />

              <p
                id="card-error"
                role="alert"
                class="text-red-700 text-center font-semibold"
              ></p>
              <button
                :disabled="isProcessing"
                type="submit"
                class="mt-4 bg-gradient-to-r from-[#fe630c] to-[#ff3200] w-full text-white text-21px font-semibold p-1.5 rounded-full"
                :class="isProcessing ? 'opacity-70' : 'opacity-100'"
              >
                <Icon v-if="isProcessing" name="eos-icons:loading" />
                <div v-else>Place order</div>
              </button>
            </form>
          </div>

          <div class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2 mt-2">AliExoress</div>
            <p class="my-2">AliExoress Keeps your information and payment</p>
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

const router = useRouter();
const route = useRoute();

let stripe = null;
let elements = null;
let card = null;
let form = null;
let total = ref(5);
let clientSecret = null;
let currentAddress = ref(null);
let isProcessing = ref(false);

let selectedArray = ref([]);

onMounted(() => {
  isProcessing.value = true;
  userStore.checkout.forEach((item) => {
    total.value += item.price;
  });
});

watch(
  () => total.value,
  () => {
    if (total.value > 0) {
      stripeInt();
    }
  }
);

const stripeInt = async () => {};
const pay = async () => {};

const createOrder = async () => {};
const showError = (errorMsgText) => {};

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
</script>

<style lang="scss" scoped></style>
