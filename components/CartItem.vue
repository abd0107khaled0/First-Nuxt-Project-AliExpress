<template>
  <div>
    <div class="flex justify-start my-2 p-2">
      <div class="my-auto">
        <div
          @mouseenter="isHover = true"
          @mouseleave="isHover = false"
          class="flex items-center justify-start p-0.5 cursor-pointer"
        >
          <div
            @click="isSelected = !isSelected"
            class="flex items-center justify-center h-[20px] w-[20px] rounded-full border-[1px]"
            :class="[
              isHover ? 'border-[#fd374f] border-[1px]' : 'border-gray-300',
              isSelected ? 'bg-[#fd374f]' : '',
            ]"
          >
            <div class="h-[8px] w-[8px] rounded-full bg-white" />
          </div>
        </div>
      </div>
      <img
        :src="product.url"
        :alt="product.title"
        class="rounded-md md:w-[150px] w-[90px]"
      />
      <div class="overflow-hidden pl-2 w-full">
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center justify-between truncate">
            <span
              class="sm:block hidden bg-[#fd374f] text-white text[9px] font-semibold rounded-sm min-w[80px] p-1"
              >Welcome Deal</span
            >
            <div class="truncate sm:pl-2">{{ product.title }}</div>
          </div>
          <button
            @click="removeFromCart()"
            class="mx-3 sm:block hidden -mt-0.5 hover:text-red-500"
          >
            <Icon name="material-symbols:delete-outline" size="20" />
          </button>
        </div>
        <div>
          $<span class="font-bold">{{ product.price / 100 }}</span>
        </div>
        <p class="text-[#009a66] text-xs font-semibold pt-1">
          Free 11-day delivery over $8.28
        </p>
        <p class="text-[#009a66] text-xs font-semibold pt-1">Free Shipping</p>
      </div>
      <div class="flex items-center justify-end">
        <button
            @click="removeFromCart()"
            class="mx-3 sm:hidden block -mt-0.5 hover:text-red-500"
          >
            <Icon name="material-symbols:delete-outline" size="20" />
          </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/store.js";
const userStore = useUserStore();

// const props = useAttrs() or defineProps([]);
const props = defineProps(["product", "selectedArray"]);
const { product, selectedArray } = toRefs(props);

const emit = defineEmits(["selectedRadio"]);

let isSelected = ref(false);
let isHover = ref(false);

const removeFromCart = () => {
  userStore.cart.forEach((prod, index) => {
    if (prod.id == product.value.id) {
      userStore.cart.splice(index, 1);
    }
  });
};

watch(
  () => isSelected.value,
  (val) => {
    emit("selectedRadio", { id: product.value.id, val: val });
  }
);
</script>

<style lang="scss" scoped></style>
