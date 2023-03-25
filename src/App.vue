<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <v-app class="app">
    <v-main>
      <Header />
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<style>
.app {
  width: 90%;
  margin: 0 auto 10% auto;
}
</style>