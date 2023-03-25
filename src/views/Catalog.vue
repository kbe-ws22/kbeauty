<!-- endpoint: /products -->
<script setup>
import CatalogItem from "../components/CatalogItem.vue";

var products = [
  {
    id: 1,
    name: "Exfoliator",
    price: 12.99,
    img: "https://via.placeholder.com/400x250/e5f8e5/134313",
  },
  {
    id: 2,
    name: "Face Wash",
    price: 10.99,
    img: "https://via.placeholder.com/400x250/e5f8e5/134313",
  },
  {
    id: 3,
    name: "Toner",
    price: 8.99,
    img: "https://via.placeholder.com/400x250/e5f8e5/134313",
  },
  {
    id: 4,
    name: "Serum",
    price: 11.99,
    img: "https://via.placeholder.com/400x250/e5f8e5/134313",
  },
  {
    id: 5,
    name: "Essence",
    price: 12.99,
    img: "https://via.placeholder.com/400x250/e5f8e5/134313",
  },
  {
    id: 6,
    name: "Face Oil",
    price: 15.99,
    img: "https://via.placeholder.com/400x250/e5f8e5/134313",
  },
  {
    id: 7,
    name: "Moisturizer",
    price: 10.99,
    img: "https://via.placeholder.com/400x250/e5f8e5/134313",
  },
  {
    id: 8,
    name: "Sunscreen",
    price: 8.99,
    img: "https://via.placeholder.com/400x250/e5f8e5/134313",
  },
];
</script>

<template>
  <div class="catalog-header">
    <h1>Catalog</h1>
    <p>Discover our exclusive products for your new 8-step skincare regime.</p>
  </div>
  <div class="catalog">
    <CatalogItem
      v-for="product in products"
      :id="product.id"
      :name="product.name"
      :price="product.price"
      :img="product.img"
    />
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/catalogpage.scss";
</style>
