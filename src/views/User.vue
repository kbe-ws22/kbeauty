<!-- endpoint: /about -->
<script>
export default {
  data(){

  },
  methods: {
    login(){
      this.$keycloak.keycloak.login();
    },
    logout(){
      this.$keycloak.keycloak.logout();
    },
  }
};
</script>

<template>
  <div class="container">
    <h1>Welcome</h1>
      <h1>{{this.$keycloak.userName}}</h1>
    <div>
      <v-btn width="140" color="secondary" @click="login()" variant="tonal" size="small" rounded="xl">Login</v-btn>
      <v-btn width="140" color="secondary" @click="logout()" variant="tonal" size="small" rounded="xl">Logout</v-btn>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin: 20px auto;
}
</style>
