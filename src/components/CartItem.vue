<script setup>
const emit = defineEmits(["deleteItem", "amountChanged"]);

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

const onClickDelete = () => {
  emit("deleteItem");
};

const onChangeAmount = event => {
  let value = event.target.value;
  emit("amountChanged", value);
};
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
      <input
        :value="amount"
        @change="onChangeAmount($event)"
        type="number"
        min=1
        max=10
      />
      <v-btn @click="onClickDelete" variant="text" icon="mdi-trash-can-outline"></v-btn>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/cart.scss";
</style>
