<template>
  <div>
    <div class="flex justify-start my-2 p-2">
      <img
        :src="product.url"
        :alt="product.title"
        class="rounded-md md:w-[150px] w-[90px]"
      />
      <div class="overflow-hidden pl-2">
        <div class="flex items-center justify-between">
          <span
            class=" bg-[#fd374f] text-white text[9px] font-semibold rounded-sm min-w[80px] p-1"
            >Welcome Deal</span
          >
          <div class="truncate sm:pl-2">{{ product.title }}</div>
        </div>
        
        <div class="text-lg font-semibold mt-2">
          $ <span class="font-bold">{{ product.price / 100 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/store.js";
const userStore = useUserStore();

// const props = useAttrs() or defineProps([]);
const props = defineProps(["product"]);
const { product } = toRefs(props);
</script>

<style lang="scss" scoped></style>
