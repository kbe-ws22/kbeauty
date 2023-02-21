<!-- endpoint: /cart -->
<script setup>
import CartItem from "../components/CartItem.vue";
</script>
<template>
  <div class="cart">
    <h1>This is a cart page</h1>
    <CartItem name="Test Product" price="10,99" amount="3" img="https://via.placeholder.com/400x250/e5f8e5/134313"/>
  </div>
</template>

<style>
/*
@media (min-width: 1024px) {
  .products {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}*/
</style>
