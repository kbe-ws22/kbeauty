<!-- endpoint: /products -->
<script>
import CatalogItem from "../components/CatalogItem.vue";
export default {
  data() {
      return {
        data: null,
      };
    },
    methods: {
      async fetchData() {      
        const response = await fetch("http://localhost:9292/services/products/");      
        this.data = await response.json();
      },    
    },
    mounted() {
      this.fetchData();
    },
}
</script>

<template>
  <div class="catalog-header">
    <h1>Catalog</h1>
    <p>Discover our exclusive products for your new 8-step skincare regime.</p>
  </div>
  <div v-if="data">{{ data }} </div>
  <!--<div class="catalog">
    <CatalogItem
      v-for="product in productList"
      :id="product.id"
      :name="product.name"
      :price="product.price"
      :img="product.img"
    />
  </div>-->
</template>

<style lang="scss">
@import "src/assets/scss/catalog.scss";
</style>
