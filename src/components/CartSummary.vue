<script setup>
const props = defineProps({
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
})
</script>

<template>
    <div class="cart-summary">
        <h1>Summary</h1>
        <v-divider></v-divider>
        <div class="cart-price">
        <div class="cart-price_content">
            <p>SUBTOTAL</p>
            <p> {{ price }} €</p>
        </div>
        <div class="cart-price_content">
            <p>SHIPPING</p>
            <p>FREE</p>
        </div>
        </div>
        <v-divider></v-divider>
        <div class="cart-price_content">
            <h1>TOTAL</h1>
            <h1> {{ total }} €</h1>
        </div>
    </div>
</template>
