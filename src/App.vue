<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<template>
  <header>
    <div class="left">
      <Menu />
    </div>
    <RouterLink to="/">
      <img
        alt="logo"
        src="https://via.placeholder.com/400x250/e5f8e5/134313g"
        width="120"
        height="50"
      />
    </RouterLink>

    <div class="right">
      <nav>
        <RouterLink to="/profile">
          <font-awesome-icon
            class="icon nav-icon"
            icon="fa-solid fa-user-circle"
          />
        </RouterLink>
        <RouterLink to="/cart">
          <font-awesome-icon
            class="icon nav-icon"
            icon="fa-solid fa-shopping-cart"
          />
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="footer">
      <RouterLink class="footer_items" to="/">Home</RouterLink>
      <RouterLink class="footer_items" to="/impressum">Impressum</RouterLink>
      <RouterLink class="footer_items" to="/team">Team</RouterLink>
      <RouterLink class="footer_items" to="/help">Help</RouterLink>
    </div>
    <p>@[kbe]auty</p>
  </footer>
</template>
