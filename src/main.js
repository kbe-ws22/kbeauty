import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.scss";
/* awesome font */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCartShopping,
  faUserCircle,
  faTrashCan as farTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

/* specific icons  */
library.add(faCartShopping, faUserCircle, faTrashCan, farTrashCan);

/* mount to app*/
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
