<script>
import CartItem from "../components/CartItem.vue";

//TODO api fetch 
//TODO amount of child to parent
let itemsA = [
  {
      id: 1,
      name: "Exfoliator",
      price: 10.99,
      amount: 1,
      img: "https://via.placeholder.com/400x250/e5f8e5/134313",
    },
    {
      id: 2,
      name: "Face Wash",
      price: 10.99,
      amount: 2,
      img: "https://via.placeholder.com/400x250/e5f8e5/134313",
    },
    {
      id: 3,
      name: "Toner",
      price: 10.99,
      amount: 3,
      img: "https://via.placeholder.com/400x250/e5f8e5/134313",
    }
]

export default {
    components: {
      CartItem
    },
    data(){
      return {
        items: itemsA,
        itemsFromAPI: null, //TODO change to items
      }
    },
    methods: {
      async fetchData(){
        // https://vuejs.org/tutorial/#step-10
        this.itemsFromAPI = null
        const res = await fetch("apiurl")
        this.itemsFromAPI = await res.join()
      },
      deleteItem(name){
        this.items = this.items.filter((item) => !item.name.match(name))
        // TODO add api request
      },
      updateAmount(name, amount){
        if(amount == 0){
          // FIX when item above deleted, own input is decreased as well
          this.deleteItem(name)
        } else {
          this.items.find( item => item.name === name).amount = amount
        }
      },
      price(){
        let value = 0;
        for(let i = 0; i < this.items.length; i++){
           value += (this.items[i].price * this.items[i].amount)
        }
        return value;
      },
      total(){
        return this.price();
      }
    }/*,
    mounted(){
      this.fetchData()
    }*/
}
</script>
<template>
  <div class="cart">
    <div class="cart-tab">
      <h1> Shopping Cart </h1>
      <hr>
      <div class="cart-items">
        <div v-if="0 < items.length">
          <CartItem v-for="item in items"
            @deleteItem="deleteItem(item.name)"
            @amountChanged="(amount) => updateAmount(item.name, amount)"
            :id="item.id"
            :name ="item.name"
            :price="item.price"
            :amount="item.amount"
            :img="item.img"
          />
        </div>
        <div v-else>
          <h2>your cart is empty</h2>
        </div>
      </div>
      <hr>
    </div>
    <div class="cart-summary">
      <h1>Summary</h1>
      <hr class="hor-line">
      <div class="cart-price">
        <div class="cart-price_content">
          <p>SUBTOTAL</p>
          <p> {{ this.price() }}</p>
        </div>
        <div class="cart-price_content">
          <p>SHIPPING</p>
          <p>FREE</p>
        </div>
      </div>
      <hr class="hor-line">
      <div class="cart-price_content">
        <h1>TOTAL</h1>
        <h1> {{ total() }} €</h1>
      </div>
    </div>
  </div>
</template>