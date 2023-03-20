import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatalogView from "../views/CatalogView.vue";
import CartView from "../views/CartView.vue";
import UserView from "../views/UserView.vue";
import ProductView from "../views/ProductView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
