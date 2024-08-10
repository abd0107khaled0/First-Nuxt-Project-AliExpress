<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        class="grid  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div
          v-for="(product, index) in products"
          :key="index + Math.random()"
        >
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
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
  {
    id: 3,
    title: "Product 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu id neque condimentum faucibus.",
    url: "https://picsum.photos/id/9/800/800",
    price: 9999.99,
  },
  {
    id: 4,
    title: "Product 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu id neque condimentum faucibus.",
    url: "https://picsum.photos/id/11/800/800",
    price: 9999.99,
  },
  {
    id: 5,
    title: "Product 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu id neque condimentum faucibus.",
    url: "https://picsum.photos/id/12/800/800",
    price: 9999.99,
  },
  {
    id: 6,
    title: "Product 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu id neque condimentum faucibus.",
    url: "https://picsum.photos/id/13/800/800",
    price: 9999.99,
  },
  {
    id: 7,
    title: "Product 7",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu id neque condimentum faucibus.",
    url: "https://picsum.photos/id/7/800/800",
    price: 9999.99,
  },
  {
    id: 8,
    title: "Product 8",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu id neque condimentum faucibus.",
    url: "https://picsum.photos/id/7/800/800",
    price: 9999.99,
  },
  {
    id: 9,
    title: "Product 9",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu id neque condimentum faucibus.",
    url: "https://picsum.photos/id/7/800/800",
    price: 9999.99,
  },
  {
    id: 10,
    title: "Product 10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu id neque condimentum faucibus.",
    url: "https://picsum.photos/id/7/800/800",
    price: 9999.99,
  },
];
</script>

<style lang="scss" scoped></style>
