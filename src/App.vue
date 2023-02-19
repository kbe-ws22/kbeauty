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
        <RouterLink to="/about">Cart</RouterLink>
      </nav>
    </div>
  </header>
  
  <RouterView/>

  <footer>
    <div class="footer">
      <RouterLink class="footer_items" to="/">Home</RouterLink>
      <RouterLink class="footer_items" to="/about">Impressum</RouterLink>
      <RouterLink class="footer_items" to="/about">Team</RouterLink>
      <RouterLink class="footer_items" to="/about">Help</RouterLink>
    </div>
    @[kbe]auty
  </footer>
</template>