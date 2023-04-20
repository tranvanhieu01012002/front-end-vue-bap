import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import UserView from "../views/UserView.vue";
import AboutView from "../views/AboutView.vue";
import DetailUserView from "../views/DetailUserView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import RoomView from "../views/RoomView.vue";
import QuestionView from "../views/QuestionView.vue";
import Auth from "@/helpers/auth";
import nProgress from "nprogress";
import LoadingView from "../views/LoadingView.vue";
import ResultView from "../views/ResultView.vue";
import SetQuestionView from "../views/SetQuestionView.vue";
import CreateQuestionView from "../views/CreateQuestionView.vue";

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
    path: "/users/:id",
    name: "user detail",
    component: DetailUserView,
    meta: {
      requiresAuth: true,
    },
    props: true,
  },
  {
    path: "/rooms/:id",
    name: "room",
    component: RoomView,
    meta: {
      requiresAuth: true,
    },
    props: true,
  },
  {
    path: "/rooms-set-questions",
    name: "room-set-question",
    component: SetQuestionView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/set-questions",
    name: "set-question",
    component: SetQuestionView,
    meta: {
      requiresAuth: true,
    },
    props: true,
  },
  {
    path: "/set-questions/:setQuestionId/questions/:questionId",
    name: "list-questions",
    component: CreateQuestionView,
    meta: {
      requiresAuth: true,
    },
    props: true,
  },
  {
    path: "/rooms/:id/:questionId",
    name: "room-question",
    component: QuestionView,
    meta: {
      requiresAuth: true,
    },
    props: true,
  },
  {
    path: "/rooms/:id/:questionId/loading",
    name: "room-question-loading",
    component: LoadingView,
    meta: {
      requiresAuth: true,
    },
    props: true,
  },
  {
    path: "/rooms/:id/:questionId/result",
    name: "room-question-result",
    component: ResultView,
    meta: {
      requiresAuth: true,
    },
    props: true,
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
  nProgress.start();
  const auth = new Auth();
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
