import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
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
.mount("#app");