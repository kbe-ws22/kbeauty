<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="left">
      <nav>
        Menu
      </nav>
    </div>
    <!-- TODO Logo zentrieren-->
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="35"
      height="35"
    />

    <div class="right">
      <div class="searchbar">
        <input type="text"/>
      </div>
      <nav>
        <RouterLink to="/about">Profile</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
      </nav>
    </div>
  </header>

  <div><p>für testen</p>
      <RouterLink to="/products">-> Products </RouterLink>
      <RouterLink to="/cart">| -> Cart</RouterLink>
  </div>

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