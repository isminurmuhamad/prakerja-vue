import Vue from "vue";
import VueRouter from "vue-router";
import TodoView from "../views/TodoView.vue";
// import TodoDetailView from "../views/TodoDetailView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todo",
    component: TodoView,
    // children: [
    //   {
    //     path: ":id",
    //     name: "TodoDetail",
    //     component: () => import("../views/TodoDetailView.vue"),
    //   },
    // ],
  },
  {
    path: "/about/:id",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TodoDetailView.vue"),
  },
  {
    path: "/:id",
    name: "TodoDetail",
    component: () => import("../views/TodoDetailView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
