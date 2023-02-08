import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "@/views/Login.vue";
import Categories from "@/views/Categories.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    meta: {layout: 'empty'},
    component: () => import('@/views/Login.vue'),
  },
  {
    path: "/categories",
    name: "categories",
    meta: {layout: 'main'},
    component: () => import('@/views/Categories.vue'),
  },
  {
    path: "/history",
    name: "history",
    meta: {layout: 'main'},
    component: () => import('@/views/History.vue'),
  },
  {
    path: "/record",
    name: "record",
    meta: {layout: 'main'},
    component: () => import('@/views/Record.vue'),
  },
  {
    path: "/profile",
    name: "profile",
    meta: {layout: 'main'},
    component: () => import('@/views/Profile.vue'),
  },
  {
    path: "/planing",
    name: "planing",
    meta: {layout: 'main'},
    component: () => import('@/views/Planing.vue'),
  },
  {
    path: "/detail-record",
    name: "datail-record",
    meta: {layout: 'main'},
    component: () => import('@/views/DetailRecord.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
