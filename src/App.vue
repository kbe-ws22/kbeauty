<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<template>
  <header>
    <div class="left">
      <Menu />
    </div>
    <!-- TODO Logo zentrieren-->
    <a href="/">
      <img
        class="text-center"
        src="https://via.placeholder.com/400x250/e5f8e5/134313g"
        width="120"
        height="50"
      />
    </a>

    <div class="right">
      <!-- TODO LINKS-->
      <nav>
        <RouterLink to="/profile">
          <font-awesome-icon icon="fa-solid fa-user-circle" />
        </RouterLink>
        <RouterLink to="/cart">
          <font-awesome-icon icon="fa-solid fa-shopping-cart" />
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

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
