<script>
import router from "../router/index.js";
import ImageGallery from "../components/ImageGallery.vue";
var products = {
  id: 1,
  name: "Exfoliator",
  price: 12.99,
  size: 60,
  images: [
    "/img/exfoliator.jpg",
    "/img/exfoliator2.jpg",
    "/img/exfoliator3.jpg",
  ],
  description:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  usage:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
  ingredients:
    "Aqua, Glycerin, Paraffinum Liquidum, Polyglyceryl-3 Methylglucose Distearate, Cetyl Palmitate, Dimethicone, Panthenol, Tocopherol Acetate, Borago Officinalis, Oatseed Oil, Pantolactone, Bisabolol, Sodium Lactate, Lactic Acid, Serine, Urea, Sorbitol, Allantoin, Sodium Chloride, Potassium Hydroxide, Carbomer, Acrylates/​C10-30 Alkyl Acrylate Crosspolymer, Cetyl Alcohol, Pentylene Glycol, Disodium EDTA, Methylparaben, Propylparaben, 2-Bromo-2-Nitropropane-1,3-Diol, Mica, Titanium Dioxide",
};
export default {
    data() {
        return {
            product: null,
            video: null
        };
    },
    methods: {
        async fetchData() {
          const id = router.currentRoute.value.params.id;
          const response = await fetch("http://localhost:9292/services/products/"+id);
          this.product = await response.json();
          const videoRes = await fetch("http://localhost:9292/services/products/"+id+"/video")
          this.video = await videoRes.json();
        },
        async addToCart(){
          const respo = await fetch("http://localhost:9292/services/cart/1/"+product.id+"/1/"+product.price, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            }
          }) //TODO USERID 
        },
        getImg(img) {
            return img.split("-");
        },
        getVideo(){
          console.log("https://www.youtube.com/"+ this.video.items[0].id.videoId)
          return "https://www.youtube.com/embed/"+ this.video.items[0].id.videoId +"?color=white";
        },
        backToGallery(){
          router.push({ name: "catalog" });
        }
    },
    mounted() {
        this.fetchData();
    },
    components: { ImageGallery }
}
</script>

<template>
  <div class="back-container" @click="backToGallery">
    <font-awesome-icon class="back-icon" icon="fa-solid fa-chevron-left" />
    <p>All Products</p>
  </div>
  <div v-if="product" class="grid-container">
    <div class="grid-item-left">
      <ImageGallery :images="getImg(product.picture)" />
      <div v-if="video">
        <iframe id="ytplayer" type="text/html" width="720" height="405" :src=getVideo() frameborder="0" />
      </div>
    </div>
    <div class="grid-item-right">
      <h1>{{ product.name }}</h1>
      <p>{{ product.weight }} ML</p>

      <v-divider></v-divider>

      <div class="add-container">
        <div class="pricing">
          <h1>{{ product.price }} €</h1>
          <p>{{ ((product.price / product.weight) * 100).toFixed(2) }}€/100ML</p>
        </div>
        <v-btn variant="tonal" size="small" rounded="xl" color="secondary" @click="addToCart()">
          Add To Card
        </v-btn>
      </div>

      <v-divider></v-divider>

      <h2>Description</h2>
      <p>{{ product.description }}</p>

      <v-divider></v-divider>

      <h2>Usage</h2>
      <p>{{ product.usage }}</p>

      <v-divider></v-divider>

      <h2>Ingredients</h2>
      <p>{{ product.ingredients }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/product.scss";
</style>