<script setup>
var menu_options = [
  "All",
  "Essence",
  "Face Wash",
  "Face Oil",
  "Face Peeling",
  "Face Mask",
  "Serum",
  "Sunscreen",
  "Toner",
];
// aus /products holen vielleicht?
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
        {{ menu_options[0] }}</RouterLink
      >
      <RouterLink to="/products/1" class="menu_item">
        {{ menu_options[1] }}</RouterLink
      >
      <RouterLink to="/products/1" class="menu_item">
        {{ menu_options[2] }}</RouterLink
      >
      <RouterLink to="/products/1" class="menu_item">
        {{ menu_options[3] }}</RouterLink
      >
      <RouterLink to="/products/1" class="menu_item">
        {{ menu_options[4] }}</RouterLink
      >
      <RouterLink to="/products/1" class="menu_item">
        {{ menu_options[5] }}</RouterLink
      >
      <RouterLink to="/products/1" class="menu_item">
        {{ menu_options[6] }}</RouterLink
      >
      <RouterLink to="/products/1" class="menu_item">
        {{ menu_options[7] }}</RouterLink
      >
      <RouterLink to="/products/1" class="menu_item">
        {{ menu_options[8] }}</RouterLink
      >
    </nav>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/homepage.scss";
</style>
