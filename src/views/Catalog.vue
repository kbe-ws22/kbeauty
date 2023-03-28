<!-- endpoint: /products -->
<script>
import CatalogItem from "../components/CatalogItem.vue";
var list = [
  {
    id: 1,
    name: "Exfoliator",
    price: 12.99,
    img: [
      "public/img/exfoliator.jpg",
      "/img/exfoliator2.jpg",
      "/img/exfoliator3.jpg"
    ]
  },
  {
    id: 2,
    name: "Face Wash",
    price: 10.99,
    img: [
      "/public/img/facewash.jpg",
      "/img/facewash2.jpg",
      "/img/facewash3.jpg",
    ]
  },
  {
    id: 3,
    name: "Toner",
    price: 8.99,
    img: [
      "../public/img/toner.jpg",
      "/img/toner2.jpg",
      "/img/toner3.jpg",
    ]
  },
  {
    id: 4,
    name: "Serum",
    price: 11.99,
    img: [
      "/../public/img/serum.jpg",
      "/img/serum2.jpg",
      "/img/serum3.jpg",
    ]
  },
  {
    id: 5,
    name: "Essence",
    price: 12.99,
    img: [
      "/img/essence.jpg",
      "/img/essence2.jpg",
      "/img/essence3.jpg",
    ]
  },
  {
    id: 6,
    name: "Face Oil",
    price: 15.99,
    img: [
      "/img/faceoil.jpg",
      "/img/faceoil2.jpg",
      "/img/faceoil3.jpg",
    ]
  },
  {
    id: 7,
    name: "Moisturizer",
    price: 10.99,
    img: [
      "/img/moisturizer.jpg",
      "/img/moisturizer2.jpg",
      "/img/moisturizer3.jpg",
    ]
  },
  {
    id: 8,
    name: "Sunscreen",
    price: 8.99,
    img: [
      "/img/sunscreen.jpg",
      "/img/sunscreen2.jpg",
      "/img/sunscreen3.jpg"
    ]
  },
];

export default {
    data() {
        return {
            products: list,
        };
    },
    /*methods: {
        async fetchData() {
            const response = await fetch("http://localhost:9292/services/products/");
            this.products = await response.json();
        },
        getImg(img) {
            return img.split("-");
        }
    },
    mounted() {
        this.fetchData();
    },*/
    components: { CatalogItem }
}
</script>

<template>
  <div class="catalog-header">
    <h1>Catalog</h1>
    <p>Discover our exclusive products for your new 8-step skincare regime.</p>
  </div>
  <div v-if="products" class="catalog">
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
