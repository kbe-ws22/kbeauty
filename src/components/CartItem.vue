<script setup>
  const emit = defineEmits( ['deleteItem'], ['amountChanged']);

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
    amount: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  });

  const clickDelete = () => {
    emit('deleteItem')
  }

  const changeAmount = (event) => {
    let value = event.target.value
    emit('amountChanged', value);
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
        <!-- TODO value-->
        <!-- FIXME: if you type in number it'll go above max value-->
        <input
          :value="amount"
          @change="changeAmount($event)"
          type="number"
          min=1
          max=10
        />
        <span @click="clickDelete">
          <font-awesome-icon class="icon" icon="fa-solid fa-trash-can" />
        </span>
      </div>
    </div>
</template>

<style lang="scss">
@import "src/assets/scss/cartpage.scss";
</style>
