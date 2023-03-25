<script setup>
defineProps({
  price: {
      type: Number,
      required: false
    }
})
</script>

<template>
  <div class="cart-price">
    <div class="cart-price_content">
      <p>SUBTOTAL</p>
      <p> {{ price }}</p>
    </div>
    <div class="cart-price_content">
      <p>SHIPPING</p>
      <p>FREE</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/cartpage.scss";
</style>
