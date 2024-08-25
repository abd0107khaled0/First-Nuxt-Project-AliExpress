<template>
  <div>
    <MainLayout>
      <div id="AddressPage" class="mt-4 max-w-[500px] mx-auto px-2">
        <div class="mx-auto mg-red-100 rounded-lg p-3">
          <div class="text-xl text-bold mb-2">Address Details</div>
          <form @submit.prevent="submit()">
            <Textinput
              class="w-full"
              placeholder="Contact Name"
              v-model:input="contactName"
              inputType="text"
              :error="error && error.type == 'contactName' ? error.message : ''"
            />

            <Textinput
              class="w-full mt-2"
              placeholder="Address"
              v-model:input="address"
              inputType="text"
              :error="error && error.type == 'address' ? error.message : ''"
            />

            <Textinput
              class="w-full mt-2"
              placeholder="zip code"
              v-model:input="zipCode"
              inputType="number"
              :error="error && error.type == 'zipCode' ? error.message : ''"
            />

            <Textinput
              class="w-full mt-2"
              placeholder="City"
              v-model:input="City"
              inputType="text"
              :error="error && error.type == 'city' ? error.message : ''"
            />

            <Textinput
              class="w-full mt-2"
              placeholder="Country"
              v-model:input="country"
              inputType="text"
              :error="error && error.type == 'country' ? error.message : ''"
            />

            <button
              :disabled="isWorking"
              type="submit"
              class="mt-6 bg-gradient-to-r from-[#fe630c] to-[#ff3200] w-full text-[21px] font-semibold p-1.5 rounded-full"
            >
              Submit
            </button>

            <div class="flex items-center justify-center">
              <div v-if="!isWorking">Update Address</div>
              <Icon
                v-else
                name="eos-icons:loading"
                size="25"
                class="mt-2"
              />
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import Textinput from "~/components/Textinput.vue";

import { useUserStore } from "~/stores/store.js";
const useStore = useUserStore();

let contactName = ref(null);
let address = ref(null);
let zipCode = ref(null);
let city = ref(null);
let country = ref(null);

let currentAddress = ref(null);
let isUpdate = ref(false);
let isWorking = ref(false);
let error = ref(null);

watchEffect(() => {
  useStore.isLoading = false;
});

const submit = async () => {
  isWorking.value = true;
  error.value = null;

  if (!contactName.value) {
    error.value = { type: "contactName", message: "Contact Name is required" };
  } else if (!address.value) {
    error.value = { type: "address", message: "Address is required" };
  } else if (!zipCode.value) {
    error.value = { type: "zipCode", message: "Zip code is required" };
  } else if (city.value) {
    error.value = { type: "city", message: "City is required" };
  } else if (country.value) {
    error.value = { type: "country", message: "Country is required" };
  }
  if (error.value) {
    isWorking.value = false;
    return;
  }
};
</script>

<style lang="scss" scoped></style>
