<!-- endpoint: /products -->
<script setup>
import CatalogItem from "../components/CatalogItem.vue";

var products = [
  {
    id: 1,
    name: "Exfoliator",
    price: 12.99,
    img: [
      "./public/img/exfoliator.jpg",
      "./public/img/exfoliator2.jpg",
      "./public/img/exfoliator3.jpg"
  ]
  },
  {
    id: 2,
    name: "Face Wash",
    price: 10.99,
    img: [
      "./public/img/facewash.jpg",
      "./public/img/facewash2.jpg",
      "./public/img/facewash3.jpg",
    ]
  },
  {
    id: 3,
    name: "Toner",
    price: 8.99,
    img: [
      "./public/img/toner.jpg",
      "./public./public/img/toner2.jpg",
      "./public/img/toner3.jpg",
    ]
  },
  {
    id: 4,
    name: "Serum",
    price: 11.99,
    img: [
      "./public/img/serum.jpg",
      "./public/img/serum2.jpg",
      "./public/img/serum3.jpg",
    ]
  },
  {
    id: 5,
    name: "Essence",
    price: 12.99,
    img: [
      "./public/img/essence.jpg",
      "./public/img/essence2.jpg",
      "./public/img/essence3.jpg",
    ]
  },
  {
    id: 6,
    name: "Face Oil",
    price: 15.99,
    img: [
      "./public/img/faceoil.jpg",
      "./public/img/faceoil2.jpg",
      "./public/img/faceoil3.jpg",
    ]
  },
  {
    id: 7,
    name: "Moisturizer",
    price: 10.99,
    img: [
      "./public/img/moisturizer.jpg",
      "./public/img/moisturizer2.jpg",
      "./public/img/moisturizer3.jpg",
    ]
  },
  {
    id: 8,
    name: "Sunscreen",
    price: 8.99,
    img: [
      "./public/img/sunscreen.jpg",
      "./public/img/sunscreen2.jpg",
      "./public/img/sunscreen3.jpg"
    ]
  },
];
</script>

<template>
  <div class="catalog-header">
    <h1>Catalog</h1>
    <p>Discover our exclusive products for your new 8-step skincare regime.</p>
  </div>
  <div class="catalog">
    <CatalogItem
      v-for="product in products"
      :id="product.id"
      :name="product.name"
      :price="product.price"
      :img="product.img[0]"
    />
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/catalog.scss";
</style>
