<!-- endpoint: /products -->
<script setup>
import CatalogItem from "../components/CatalogItem.vue";
import { products } from "../data/products.js";
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
      :img="product.images[0]"
    />
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/catalog.scss";
</style>
