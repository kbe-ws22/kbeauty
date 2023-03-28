<script setup>
import router from "../router/index.js";
import ImageGallery from "../components/ImageGallery.vue";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { products } from '../data/products.js';

const route = useRoute();
const id = route.params.id
var product;

onBeforeMount(() => {
  product = products.find(p => p.id == id);
})

function backToGallery() {
  router.push({ name: "catalog" });
}
</script>

<template>
  <div class="back-container" @click="backToGallery">
    <font-awesome-icon class="back-icon" icon="fa-solid fa-chevron-left" />
    <p>All Products</p>
  </div>
  <div class="grid-container">
    <div class="grid-item-left">
      <ImageGallery :images="product.images" />
    </div>
    <div class="grid-item-right">
      <h1>{{ product.name }}</h1>
      <p>{{ product.size }} ML</p>

      <v-divider></v-divider>

      <div class="add-container">
        <div class="pricing">
          <h1>{{ product.price }} €</h1>
          <p>{{ ((product.price / product.size) * 100).toFixed(2) }}€/100ML</p>
        </div>
        <v-btn variant="tonal" size="small" rounded="xl" color="secondary">
          Add To Card
        </v-btn>
      </div>

      <v-divider></v-divider>

      <h2>Description</h2>
      <p>{{ product.description }}</p>

      <v-divider></v-divider>

      <h2>Usage</h2>
      <p>{{ product.usage }}</p>

      <v-divider></v-divider>

      <h2>Ingredients</h2>
      <p>{{ product.ingredients }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/product.scss";
</style>