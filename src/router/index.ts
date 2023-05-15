import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/helpers/auth";
import nProgress from "nprogress";
import { useUserStore } from "@/store";
import routes from "./routeArray";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const auth = new Auth();

  if (to.meta.requiresAuth && !(await auth.checkLogin()))
    return next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  else if (to.meta.requiresOpenRoom && userStore.roomOwnerId === "") {
    return next({
      path: "/",
    });
  } else {
    next();
  }
});
router.afterEach(() => {
  nProgress.done();
});

export { router, routes };
