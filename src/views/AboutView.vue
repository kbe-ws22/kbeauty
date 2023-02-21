<!-- endpoint: /about -->
<script>
export default {
  name: 'app',
  props: ['keycloak'],
  data () {
    return {
      msg: 'Welcome to KBEauty Web-Shop'
    }
  }
}
</script>

<template>
  <div id="app1">
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
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
  color: #333;
  font-size: 20px;
}
a {
  color: #42b983;
}
#wrapper1 {
  display: flex;
  margin-top: 100px;
}
.jwt-token {
  width: 50%;
  display: block;
  padding: 20px;
  margin: 10 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #d63aff;
  font-weight: bolder;
}
.btn {
    color: #fff;
    background-color: #0088ce;
    border-color: #00659c;
    padding: 6px 10px;
    font-size: 14px;
    line-height: 1.3333333;
    border-radius: 1px;
}
body {
  background-color: #fcd5e8;
}

#logout-container {
  position: absolute;
  top: 10px;
  right: 10px;
}
#cart-container {
  position: absolute;
  top: 50px;
  right: 10px;
}
.squircle-btn {
  display: inline-block;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #ffffff;
  border: 2px solid #000000;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 70px;
  margin-right: 10px;
}
</style>