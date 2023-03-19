<script setup>
  var products = [
    {
      id: 1,
      name: "Exfoliator",
    },
    {
      id: 2,
      name: "Face Wash",
    },
    {
      id: 3,
      name: "Toner",
    },
    {
      id: 4,
      name: "Serum",
    },
    {
      id: 5,
      name: "Essence",
    },
    {
      id: 6,
      name: "Face Oil",
    },
    {
      id: 7,
      name: "Moisturizer",
    },
    {
      id: 8,
      name: "Sunscreen",
    },
  ]

  function openNav() {
    document.getElementById("menu_sidebar").style.display = "block";
  }

  function closeNav() {
    document.getElementById("menu_sidebar").style.display = "none";
  }
</script>

<template>
  <p class="menu_btn" @click="openNav">&#9776;</p>
  <div class="menu">
    <nav id="menu_sidebar">
      <p class="menu_item menu_btn" @click="closeNav">&times;</p>
      <RouterLink to="/products/" class="menu_item">
        All</RouterLink
      >
      <RouterLink
        v-for="product in products"
        to="/products/" class="menu_item">
        {{ product.name }}</RouterLink
      >
    </nav>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/homepage.scss";
</style>
