<script>
import CartItem from "../components/CartItem.vue";
//TODO api fetch 
//TODO amount of child to parent
let itemsA = [
  {
      id: 1,
      name: "Exfoliator",
      price: "10,99",
      amount: 1,
      img: "https://via.placeholder.com/400x250/e5f8e5/134313",
    },
    {
      id: 2,
      name: "Face Wash",
      price: "10,99",
      amount: 2,
      img: "https://via.placeholder.com/400x250/e5f8e5/134313",
    },
    {
      id: 3,
      name: "Toner",
      price: "10,99",
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
      }
    }/*,
    mounted(){
      this.fetchData()
    }*/
}
</script>
<template>
  <div class="cart">
    <h1>This is a cart page</h1>
    <div v-if="0 < items.length ">
      <CartItem v-for="item in items"
      @deleteItem="deleteItem(item.name)" @amountChanged="(amount) => updateAmount(item.name, amount)"
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
    <!-- TODO löschen-->
    <p> LÖSCHEN </p>
    <div v-for="item in items">
      <p>{{item.name}}: {{item.amount}}</p>
    </div>
  </div>
</template>