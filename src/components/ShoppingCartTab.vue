<script setup>
import CartItem from "../components/CartItem.vue";

const props = defineProps({
    components: {
        CartItem,
    }, 
    items: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <div class="cart-items">
        <div v-if="0 < items.length">
            <CartItem v-for="item in items"
                @deleteItem="deleteItem"
                @amountChanged="updateAmount"
                :deleteItem="deleteItem"
                :amountChanged="updateAmount"
                :id="item.id"
                :name ="item.name"
                :price="item.price"
                :amount="item.amount"
                :img="item.img"
            />
        </div>
        <div v-else>
            <h2>Your cart is empty.</h2>
        </div>
    </div>
</template>