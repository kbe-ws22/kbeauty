<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <v-app class="app">
    <Header />
      <v-main>
        <router-view />
      </v-main>
    <Footer />
  </v-app>
</template>

<style>
.v-main {
  width: 80%;
  margin: 0 auto 100px auto;
}
</style>