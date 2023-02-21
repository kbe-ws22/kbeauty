<!-- endpoint: /about -->
<script>
export default {
  name: 'user',
  props: ['keycloak'],
  data () {
    return {
      msg: 'Welcome to KBEauty Web-Shop'
    }
  }
}
</script>

<template>
  <div id="user">
    <h2>You are currently logged in as: {{keycloak.idTokenParsed.preferred_username}}</h2>
    <div id="logout-container">
      <button class="btn" @click="keycloak.logout()">Logout</button>
    </div>
    <div id="cart-container">
      <button class="btn" @click="addToCart()">Cart</button>
    </div>
    <div id="wrapper1">
      <div class="jwt-token">
        <h3 style="color: black;">JWT Token</h3>
        {{keycloak.idToken}}
      </div>
      <div class="jwt-token">
        <h3 style="color: black;">Info</h3>
        <ul>
          <li>clientId: {{keycloak.clientId}}</li>
          <li>Auth Server Url: {{keycloak.authServerUrl}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
</style>