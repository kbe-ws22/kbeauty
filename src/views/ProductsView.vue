<!-- endpoint: /products -->
<script setup>
import CatalogItem from "../components/CatalogItem.vue";
</script>

<template>
  <div class="catalog-header">
    <h1>Catalog</h1>
    <p>Discover our exclusive products for your new 8-step skincare regime.</p>
  </div>
  <div class="catalog">
    <CatalogItem
      id="1"
      name="Test Product"
      price="10,99"
      img="https://via.placeholder.com/400x250/e5f8e5/134313"
    />
    <CatalogItem
      id="1"
      name="Test Product"
      price="20,99"
      img="https://via.placeholder.com/400x250/e5f8e5/134313"
    />
    <CatalogItem
      id="1"
      name="Test Product"
      price="8,99"
      img="https://via.placeholder.com/400x250/e5f8e5/134313"
    />
    <CatalogItem
      id="1"
      name="Test Product"
      price="15,99"
      img="https://via.placeholder.com/400x250/e5f8e5/134313"
    />
    <CatalogItem
      id="1"
      name="Test Product"
      price="4,99"
      img="https://via.placeholder.com/400x250/e5f8e5/134313"
    />
    <CatalogItem
      id="1"
      name="Test Product"
      price="7,99"
      img="https://via.placeholder.com/400x250/e5f8e5/134313"
    />
    <CatalogItem
      id="1"
      name="Test Product"
      price="24,99"
      img="https://via.placeholder.com/400x250/e5f8e5/134313"
    />
    <CatalogItem
      id="1"
      name="Test Product"
      price="9,99"
      img="https://via.placeholder.com/400x250/e5f8e5/134313"
    />
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/productspage.scss";
</style>
