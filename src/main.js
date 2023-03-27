import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueKeyCloak from '@dsb-norge/vue-keycloak-js';

import "./assets/main.scss";
/* awesome font */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTrashCan as farTrashCan,
  faChevronLeft as leftIcon,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import vuetify from './plugins/vuetify';

/* specific icons  */
library.add(
  faTrashCan,
  farTrashCan,
  leftIcon
);

/* mount to app*/
createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
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