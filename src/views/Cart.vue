<script>
import CartItem from "../components/CartItem.vue";
import CartSummary from "../components/CartSummary.vue";
import ShippingForm from "../components/ShippingForm.vue";
import CreditCardForm from "../components/CreditCardForm.vue";
import DebitChargeForm from "../components/DebitChargeForm.vue";

//TODO api fetch 
const tabs = ['shopping_cart', 'shipping_details', 'payment_options']
let itemsExample = [
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
        CartItem,
        CartSummary,
        ShippingForm,
        CreditCardForm,
        DebitChargeForm,
    }, 
    data(){
        return {
            items: itemsExample,
            itemsFromAPI: null, //TODO change to items
            editBilling: false,
            currentTab: 'shopping_cart',
        }
    },
    mounted() {
      this.changeTab(this.currentTab);
      // this.fetchData();
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
      },
      changeTab(tab) {
        tabs.map(t => document.getElementById(t).style.display = "none");
        document.getElementById(tab).style.display = "block";
        this.currentTab = tab;

      },
      toggleBilling() {
        this.editBilling = !this.editBilling;
      },
      onClickContinue() {
        if(this.currentTab == 'shopping_cart') {
          this.changeTab('shipping_details')
        } else {
          this.changeTab('payment_options')
        }
      }
    }
}
</script>

<template>
  <div class="tabs">
    <v-btn
      id="shopping_cart-button"
      class="tab_button"
      v-on:click="changeTab('shopping_cart')"
      variant="tonal"
      rounded=0
    >Shopping Cart</v-btn>
    <v-btn 
      id="shipping_details-button"
      class="tab_button"
      v-on:click="changeTab('shipping_details')"
      variant="tonal"
      rounded=0
      :disabled="currentTab == 'shopping_cart'"
    >Shipping Details</v-btn>
    <v-btn
      id="payment_options-button"
      class="tab_button"
      v-on:click="changeTab('payment_options')"
      variant="tonal"
      rounded=0
      :disabled="currentTab != 'payment_options'"
    >Payment Options</v-btn>
  </div>

  <div id="tabcontent">
    <div id="shopping_cart">
      <div class="cart">
        <div class="cart-tab">
          <h1>Shopping Cart</h1>
          <v-divider></v-divider>
          <div class="cart-items">
            <div v-if="0 < items.length">
              <CartItem v-for="item in items"
                @deleteItem="deleteItem(item.name)"
                @amountChanged="(amount) => updateAmount(item.name, amount)"
                :key="item"
                :id="item.id"
                :name="item.name"
                :price="item.price"
                :amount="item.amount"
                :img="item.img"
              />
            </div>
            <div v-else>
              <h2>Your cart is empty.</h2>
            </div>
          </div>
          <v-divider></v-divider>
        </div>
        <CartSummary
          :price="this.price()"
          :total="this.total()"
          />
      </div>
    </div>

    <div id="shipping_details">
      <div class="cart">
        <div class="cart-tab">
          <h1>Shipping Details</h1>
          <v-divider></v-divider>
          <div class="cart-items">
            <ShippingForm
            />
            <v-divider></v-divider>
            <div class="billing">
              <h1>Billing Details</h1>
              <v-btn @click="toggleBilling" variant= "text" icon="mdi-pencil"></v-btn>
            </div>
            <v-divider></v-divider>
            <div v-if="!editBilling">
              <h2>My billing information is the same as my shipping information.</h2>
            </div>
            <div v-else>
              <ShippingForm
              />
            </div>
            <v-divider></v-divider>
          </div>
        </div>
        <CartSummary
            :price="this.price()"
            :total="this.total()"
        />
      </div>
    </div>

    <div id="payment_options">
      <div class="cart">
        <div class="cart-tab">
          <h1>Payment Options</h1>
          <v-divider></v-divider>
          <div class="cart-items">
            <v-expansion-panels>
              <v-expansion-panel key="credit_card" title="Credit Card">
                <v-expansion-panel-text>
                  <CreditCardForm
                  />
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel key="debit_charge" title="Debit Charge">
                <v-expansion-panel-text>
                  <DebitChargeForm 
                  />
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-divider></v-divider>
          </div>
        </div>
        <CartSummary
            :price="this.price()"
            :total="this.total()"
        />
      </div>
    </div>

    <div class="bottom_buttons">
      <v-btn width="140" v-if="this.currentTab != 'payment_options'" color="primary" @click="onClickContinue()" variant="tonal" size="small" rounded="xl">Continue</v-btn>
      <v-btn width="140" v-else color="primary" @click="$router.push('/confirmation')" variant="tonal" size="small" rounded="xl">Order Now</v-btn>
      <v-btn width="140" class="ms-5" @click="$router.push('/')" variant="tonal" size="small" rounded="xl">Cancel</v-btn>
    </div>
  </div>
</template>

<style scoped>
.tabs {
    display: flex;
    height: 80px;
    align-items: center;
}
.tab_button {
    width: 33.33%;
    height: 70%;
}
.billing {
  display: flex;
  justify-content: space-between;
}
.bottom_buttons {
  position: fixed;
  bottom: 98px;
  right: 10%;
}
</style>