import Vue from "vue";
import Router from "vue-router";
import VueRouter from "vue-router";

import Home from "../components/Home";
import DemoOne from "../components/DemoOne.vue";
import DemoTwo from "../components/DemoTwo.vue";
import DemoThree from "../components/DemoThree.vue";
import DemoFour from "../components/DemoFour.vue";
import DemoFive from "../components/DemoFive.vue";
import Login from "../components/Login";
import Register from "../components/Register";
import { auth } from "../firebase";

Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
    // component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: "/settings",
    name: "settings",
    component: Register,
    // component: () => import( /* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/demo-1",
    name: "DemoOne",
    component: DemoOne
  },
  {
    path: "/demo-2",
    name: "DemoTwo",
    component: DemoTwo
  },
  {
    path: "/demo-3",
    name: "DemoThree",
    component: DemoThree
  },
  {
    path: "/demo-4",
    name: "DemoFour",
    component: DemoFour
  },
  {
    path: "/demo-5",
    name: "DemoFive",
    component: DemoFive
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: routes
});
// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    next();
  }
});

export default router;
