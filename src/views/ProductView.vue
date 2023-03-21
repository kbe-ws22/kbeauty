<script setup>
import router from "../router/index.js";

var product = {
  id: 1,
  name: "Exfoliator",
  price: 12.99,
  size: 60,
  img: "https://via.placeholder.com/400x250/e5f8e5/134313",
  description:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  usage:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
  ingredients:
    "Aqua, Glycerin, Paraffinum Liquidum, Polyglyceryl-3 Methylglucose Distearate, Cetyl Palmitate, Dimethicone, Panthenol, Tocopherol Acetate, Borago Officinalis, Oatseed Oil, Pantolactone, Bisabolol, Sodium Lactate, Lactic Acid, Serine, Urea, Sorbitol, Allantoin, Sodium Chloride, Potassium Hydroxide, Carbomer, Acrylates/​C10-30 Alkyl Acrylate Crosspolymer, Cetyl Alcohol, Pentylene Glycol, Disodium EDTA, Methylparaben, Propylparaben, 2-Bromo-2-Nitropropane-1,3-Diol, Mica, Titanium Dioxide",
};

function backToGallery() {
  console.log("hi");
  router.push({ name: "catalog" });
}
</script>

<template>
  <div class="back-container" @click="backToGallery">
    <font-awesome-icon class="back-icon" icon="fa-solid fa-chevron-left" />
    <p>Back to catalog</p>
  </div>
  <div class="grid-container">
    <div class="grid-item-left">
      <div class="product-item_large-img">
        <!-- FIXME <img :src=require({img})/> -->
      </div>
    </div>
    <div class="grid-item-right">
      <h1>{{ product.name }}</h1>
      <p>{{ product.size }} ML</p>

      <hr class="hor-line" />

      <div class="add-container">
        <div class="pricing">
          <h1>{{ product.price }} €</h1>
          <p>{{ (product.price / product.size) * 100 }}/100ML</p>
        </div>
        <button class="add-button">Add To Cart</button>
      </div>

      <hr class="hor-line" />

      <h2>Description</h2>
      <p>{{ product.description }}</p>

      <hr class="hor-line" />

      <h2>Usage</h2>
      <p>{{ product.usage }}</p>

      <hr class="hor-line" />

      <h2>Ingredients</h2>
      <p>{{ product.ingredients }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/productpage.scss";
</style>
