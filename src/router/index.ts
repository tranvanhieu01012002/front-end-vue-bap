import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import UserView from "../views/UserView.vue";
import AboutView from "../views/AboutView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import Auth from "@/helpers/auth";
import nProgress from "nprogress";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/users",
    name: "users",
    component: UserView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: NotFoundView,
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("chuan bi move ne");
  nProgress.start();
  const auth = new Auth();
  auth.isLogin;
  if (to.meta.requiresAuth && !auth.isLogin)
    return next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  else next();
});
router.afterEach(() => {
  nProgress.done();
});

export { router, routes };
