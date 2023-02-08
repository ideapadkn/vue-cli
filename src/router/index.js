import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "@/views/Login.vue";
import Categories from "@/views/Categories.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    meta: {layout: 'empty'},
    component: () => import('@/views/Login.vue'),
  },
  {
    path: "/register",
    name: "register",
    meta: {layout: 'empty'},
    component: () => import('@/views/Register.vue'),
  },
  {
    path: "/",
    name: "home",
    meta: {layout: 'main'},
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: "/categories",
    name: "categories",
    meta: {layout: 'main'},
    component: () => import('@/views/Categories.vue'),
  },
  {
    path: "/datail-record",
    name: "datail-record",
    meta: {layout: 'main'},
    component: () => import('@/views/DetailRecord.vue'),
  },
  {
    path: "/history",
    name: "history",
    meta: {layout: 'main'},
    component: () => import('@/views/History.vue'),
  },
  {
    path: "/profile",
    name: "profile",
    meta: {layout: 'main'},
    component: () => import('@/views/Profile.vue'),
  }, 
  {
    path: "/record",
    name: "record",
    meta: {layout: 'main'},
    component: () => import('@/views/Record.vue'),
  },
  {
    path: "/planning",
    name: "planning",
    meta: {layout: 'main'},
    component: () => import('@/views/Planning.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
