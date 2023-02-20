<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,   
  },
  amount: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="cartItem">
    <div class="cartItem_img">
      <img class="mySlides" src="https://via.placeholder.com/400x250/e5f8e5/134313"/>
    </div>
    <div class="cartItem_content">
      <h3>{{name}}</h3>
      <p>{{price}}</p>
    </div>
    <div class="cartItem_options">
      <input type="number" value={{amount}} min="0" max="10">
      <button>trashcan</button>
    </div>
  </div>
</template>

<style lang="scss">
@import 'src/assets/cartpage.scss'
</style>
