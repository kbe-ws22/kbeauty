<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
import CartItem from "./components/CartItem.vue";

</script>

<template>
  <header>
    <div class="left">
      <Menu />
    </div>
    <!-- TODO Logo zentrieren-->
    <a href="/">
      <img
        class="logo"
        src="https://via.placeholder.com/400x250/e5f8e5/134313g"
        width="120"
        height="50"
      />
    </a>

    <div class="right">
      <div class="searchbar">
        <input type="text" placeholder="Search.."/>
      </div>
      <!-- TODO LINKS-->
      <nav>
        <RouterLink to="/profile"> PROFILE </RouterLink>
        <RouterLink to="/cart"> CART </RouterLink>
      </nav>
    </div>
  </header>

  <div><p>für testen</p>
      <RouterLink to="/products">-> Products </RouterLink>
      <RouterLink to="/cart">| -> Cart</RouterLink>
      <RouterLink to="/about">| -> About</RouterLink>
  </div>

  <CartItem name="Tester" price="10.99" amount="3"/>
  <RouterView/>

  <!-- TODO links im footer-->
  <footer>
    <div class="footer">
      <RouterLink class="footer_items" to="/">Home</RouterLink>
      <RouterLink class="footer_items" to="/impressum">Impressum</RouterLink>
      <RouterLink class="footer_items" to="/team">Team</RouterLink>
      <RouterLink class="footer_items" to="/help">Help</RouterLink>
    </div>
    @[kbe]auty
  </footer>
</template>