<!-- endpoint: /products -->
<script>
import CatalogItem from "../components/CatalogItem.vue";

export default {
    data() {
        return {
            products: null,
        };
    },
    methods: {
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
    },
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
      :img="'/img/'+getImg(product.picture)[0]+'.jpg'"
    />
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/catalog.scss";
</style>
