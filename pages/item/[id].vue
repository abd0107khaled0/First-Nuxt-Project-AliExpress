<template>
  <div>
    <MainLayout>
      <div class="w-full mx-auto px-2 max-w-[1200px] min-h-[100vh]">
        <div class="md:flex gap-4 justify-between mx-auto w-full">
          <div class="md:w-[40%]">
            <img
              v-if="currentImage"
              class="rounded-lg object-fit"
              :src="currentImage"
              alt="https://picsum.photos/id/8/800/800"
            />
            <div
              v-if="images[0] !== ''"
              class="flex items-center justify-center mt-2 gap-4"
            >
              <div
                v-for="(image, index) in images"
                :key="index + Math.random()"
              >
                <img
                  @mouseover="currentImage = image"
                  @click="currentImage = image"
                  width="70"
                  class="rounded-md object-fill border-[3px] cursor-pointer"
                  :class="currentImage == image ? 'border-[#ff5353]' : ''"
                  :src="image"
                  :alt="image"
                />
              </div>
            </div>
          </div>
          <div class="md:w-[60%] bg-red-100 p-3 rounded-lg">
            <div v-if="true">
              <p class="mb-2">Title</p>
              <p class="font-light text-[12px] mb-2">Description Section</p>
            </div>

            <div class="flex items-center pt-1.5">
              <span
                class="h-4 min-w-4 rounded-full p-0.5 bg-[#ffd000] mr-2 relative"
              >
                <Icon
                  name="material-symbols:star-rounded"
                  class="-mt-[0px] absolute"
                  size="12"
                />
              </span>
              <p class="text-[#ff5353]">Extra 5% off</p>
            </div>
            <div class="flex items-center justify-start my-2">
              <Icon name="material-symbols:star-rounded" color="#ff5353" />
              <Icon name="material-symbols:star-rounded" color="#ff5353" />
              <Icon name="material-symbols:star-rounded" color="#ff5353" />
              <Icon name="material-symbols:star-rounded" color="#ff5353" />
              <Icon name="material-symbols:star-rounded" color="#ff5353" />
              <span class="text-[13px] font-light ml-2"
                >5 213 REviews 1,000+ orders</span
              >
            </div>
            <div class="border-b">
              <div class="flex items-center justify-start gap-2 my-2">
                <div class="text-xl font-bold">${{ priceComputed }}</div>
                <span
                  class="bg-[#f5f5f5] border text-[#c08562] text-[9px] font-semibold px-1 rounded-sm"
                >
                  70% off</span
                >
              </div>
              <p class="text-[#009a66] text-sm font-semibold pt-1">
                Free 11-day delivery over $8.28
              </p>
              <p class="text-[#009a66] text-xs font-semibold pt-1">
                Free shipping
              </p>
              <div class="py-2" />
              <button
                @click="addToCart()"
                :disabled="isCart"
                class="px-6 py-2 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-[#ff851a] to-[#ffac2c]"
              >
                <div v-if="isInCart">Is Added</div>
                <div v-else>Add to Cart</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { ref, watch } from "vue";

import { useUserStore } from "~/stores/store.js";
const userStore = useUserStore();

const route = useRoute()
const router = useRouter()

const images = ref([
  "",
  "https://picsum.photos/id/213/800/800",
  "https://picsum.photos/id/214/800/800",
  "https://picsum.photos/id/215/800/800",
  "https://picsum.photos/id/216/800/800",
  "https://picsum.photos/id/217/800/800",
]);
let currentImage = ref(null);

const priceComputed = computed(() => {
  return "26.40";
});

const isInCart = computed(() => {
  let res = false;
  userStore.cart.forEach((prod) => {
    if (route.params.id == prod.id) {
      res = true;
    }
    return res;
  });
});

// watch run when change value
watch([currentImage, images], (newImage, oldImage) => {});

onMounted(() => {
  // watchEffect run when app is render or change value
  watchEffect(() => {
    images.value[0] = "https://picsum.photos/id/212/800/800";
    currentImage.value = images.value[0];
  });
});

const addToCart = () => {
  alert("Added");
};
</script>

<style lang="scss" scoped></style>
