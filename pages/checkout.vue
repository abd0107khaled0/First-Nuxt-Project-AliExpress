<template>
  <div>
    <MainLayout>
      <div class="mt-4 max-w-[1200px] mx-auto px-2">
        <div class="gap-4 md:flex justify-between mx-auto w-full">
          <div class="md:w-[65%]">
            <div class="bg-red-100 rounded-lg p-4">
              <div class="text-xl font-semibold mb-2">Shipping Address</div>
            </div>
            <div v-if="true">
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
                        <div class="font-bold"> {{ currentAddress.data.name }} </div>
                    </li>
                </ul>
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
