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
  <div class="catalogItem" @click="$router.push('/products/' + id)">
    <div class="catalogItem_img">
      <!-- FIXME <img :src=require({img})/> -->
    </div>
    <div class="catalogItem_content">
      <h3>{{ name }}</h3>
      <p>{{ price }} €</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/productspage.scss";
</style>
