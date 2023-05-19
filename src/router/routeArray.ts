import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import UserView from "../views/UserView.vue";
import AboutView from "../views/AboutView.vue";
import DetailUserView from "../views/DetailUserView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import RoomView from "../views/RoomView.vue";
import QuestionView from "../views/QuestionView.vue";
import LoadingView from "../views/LoadingView.vue";
import ResultView from "../views/ResultView.vue";
import SetQuestionView from "../views/SetQuestionView.vue";
import CreateQuestionView from "../views/CreateQuestionView.vue";
import RegisterView from "../views/RegisterView.vue";
import ConfirmRegister from "../views/ConfirmRegister.vue";
import GameView from "../views/GameView.vue";
import LibraryView from "../views/LibraryView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
      label: "Home",
      layout: "default",
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      requiresAuth: false,
      label: "About",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      requiresAuth: false,
      label: "Login",
      layout: "no-header",
    },
  },
  {
    path: "/users",
    name: "users",
    component: UserView,
    meta: {
      requiresAuth: true,
      label: "Users",
      layout: "default",
    },
  },
  {
    path: "/play",
    name: "play",
    component: GameView,
    meta: {
      requiresAuth: true,
      label: "Play",
      layout: "default",
    },
  },
  {
    path: "/library",
    name: "library",
    component: LibraryView,
    meta: {
      requiresAuth: true,
      label: "Library",
      layout: "default",
    },
  },
  {
    path: "/users/:id",
    name: "user detail",
    component: DetailUserView,
    meta: {
      requiresAuth: true,
      layout: "default",
    },
    props: true,
  },
  {
    path: "/rooms/:id(\\d+)/set-questions/:setQuestionId(\\d+)",
    name: "room",
    component: RoomView,
    meta: {
      requiresAuth: true,
      requiresOpenRoom: true,
      layout: "default",
    },
    props: true,
  },
  {
    path: "/rooms-set-questions",
    name: "room-set-question",
    component: SetQuestionView,
    meta: {
      requiresAuth: true,
      layout: "default",
    },
  },
  {
    path: "/set-questions",
    name: "set-question",
    component: SetQuestionView,
    meta: {
      requiresAuth: true,
      layout: "default",
    },
    props: true,
  },
  {
    path: "/set-questions/:setQuestionId(\\d+)/questions/:questionId(\\d+)",
    name: "list-questions",
    component: CreateQuestionView,
    meta: {
      requiresAuth: true,
      layout: "default",
    },
    props: true,
  },
  {
    path: "/rooms/:id(\\d+)/:questionId(\\d+)",
    name: "room-question",
    component: QuestionView,
    meta: {
      requiresAuth: true,
      layout: "default",
    },
    props: true,
  },
  {
    path: "/rooms/:id(\\d+)/:questionId(\\d+)/loading",
    name: "room-question-loading",
    component: LoadingView,
    meta: {
      requiresAuth: true,
      layout: "default",
    },
    props: true,
  },
  {
    path: "/rooms/:id(\\d+)/:questionId(\\d+)/result",
    name: "room-question-result",
    component: ResultView,
    meta: {
      requiresAuth: true,
      layout: "default",
    },
    props: true,
  },
  {
    path: "/confirm/:id",
    name: "confirm",
    component: ConfirmRegister,
    meta: { requiresAuth: false, layout: "default" },
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: NotFoundView,
    meta: { requiresAuth: false, layout: "default" },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: { requiresAuth: false, layout: "default" },
  },
];

export default routes;
