<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="catalog-item" @click="$router.push('/products/' + id)">
    <div class="catalog-item_img">
      <img :src="img" />
    </div>
    <div class="catalog-item_content">
      <h3>{{ name }}</h3>
      <p>{{ price }} €</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/catalog.scss";
</style>
