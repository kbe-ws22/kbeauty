<script>
export default {
  name: "user",
  props: ["keycloak"],
  data() {
    return {
      msg: "Welcome to KBEauty Web-Shop",
    };
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
  <div class="user">
    <h1>Hi,  {{ this.$keycloak.userName }}!</h1>
        <h2>User id: {{this.$keycloak.keycloak.subject }}</h2> 
    <v-btn @click="login()"> login </v-btn>

    <v-btn @click="logout()"> logout </v-btn>
  </div>
</template>
