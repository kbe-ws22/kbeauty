import { createRouter, createWebHistory } from "vue-router";
import Catalog from "../views/Catalog.vue";
import Cart from "../views/Cart.vue";
import User from "../views/User.vue";
import Product from "../views/Product.vue";
import About from "../views/About.vue";
import Team from "../views/Team.vue";
import Impressum from "../views/Impressum.vue";
import Confirmation from "../views/Confirmation.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: User,
  },
  {
    path: "/products",
    name: "catalog",
    component: Catalog,
  },
  {
    path: "/products/:id",
    name: "product",
    component: Product,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: Impressum,
  },
  {
    path: "/confirmation",
    name: "Confirmation",
    component: Confirmation,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// scroll back to top after routing
router.beforeEach((to, from) => {
  window.scrollTo(0, 0);
});

export default router;
