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
  img: {
    type: String,
    required: true,
  },
});

function deleteItem(n) {
  alert(n + " deletion needs implementation");
}
</script>

<template>
  <div class="cart-item">
    <div class="cart-item_img">
      <!-- FIXME <img :src=require({img})/> -->
    </div>
    <div>
      <h3>{{ name }}</h3>
      <p>{{ price }} €</p>
    </div>
    <div class="cart-item_options">
      <!-- FIXME value + deleteItem -->
      <input type="number" value="{{amount}}" min="0" max="10" />
      <span @click="deleteItem(name)">
        <font-awesome-icon icon="fa-solid fa-trash-can" />
      </span>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/cartpage.scss";
</style>
