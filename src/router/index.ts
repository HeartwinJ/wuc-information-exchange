import { createRouter, createWebHistory } from "vue-router";
import AuthView from "../views/AuthView.vue";
import VaultView from "../views/VaultView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "auth", component: AuthView },
    { path: "/vault", name: "vault", component: VaultView },
    { path: "/:catchAll(.*)", redirect: { name: "auth" } },
  ],
});

export default router;
