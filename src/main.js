import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueKeyCloak from '@dsb-norge/vue-keycloak-js';

import "./assets/main.scss";
import vuetify from './plugins/vuetify';

/* mount to app*/
createApp(App)
.use(router)
.use(vuetify)
.use(VueKeyCloak, {
  init: {
    // Use 'login-required' to always require authentication
    // If using 'login-required', there is no need for the router guards in router.js
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html"
  },
  config: {
    url: 'http://localhost:8080/auth',
    clientId: 'app-vue',
    realm: 'kbeauty-react-auth'
  },
  onReady (keycloak) {
   console.log(keycloak)
  }
})
.mount("#app");