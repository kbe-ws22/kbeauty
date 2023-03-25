import { createRouter, createWebHistory } from "vue-router";
import CatalogView from "../views/Catalog.vue";
import CartView from "../views/Cart.vue";
import UserView from "../views/User.vue";
import ProductView from "../views/Product.vue";
import About from "../views/About.vue";
import Team from "../views/Team.vue";
import Impressum from "../views/Impressum.vue";
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
    component: UserView,
  },
  {
    path: "/products",
    name: "catalog",
    component: CatalogView,
  },
  {
    path: "/products/:id",
    name: "product",
    component: ProductView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
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
